// apisauce  -
// Wrapper around axios(popular library to call apis)
// To call apis
// Apisauce - Axios + standardized erros + request/response transforms
// Best part about apisauce - whenever we call server, the underlined promise is always resolved even if we have error
// so we dont need to add try/catch block. We just take the response and check if there is error

import { create } from "apisauce";
import cache from "../utility/cache";
import AuthStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://10.0.0.26:9000/api",
});

// // whenevr we call server,the promise is always resolved. Whe promise is resolved, we get response object
// apiClient.get("/listings").then((reponse) => {
//   // instead of try/catch we can use response.ok to check if any error
//   // if !response.ok -> response.problem
//   // response.problem is a string and it can be CLIENT_ERROR, SERVER_ERROR, TIMEOUT_ERROR etc (standardized errors)
// });

// apiClient.get fetches the data from the server but we are overriding get() with additional feature
// First it will fetch data from server and then store it in cache, so if network goes down we can get data from
// cache
// const get = apiClient.get;
// apiClient.get = async (url, params, axiosConfig) => {
//   // calling server
//   const response = await get(url, params, axiosConfig);

//   // if request is successful - storing data in cache and returning response
//   if (response.ok) {
//     cache.store(url, response.data);
//     return response;
//   }

//   // if request is unsuccessful due to network - fetching data from cache if present else returning response from
//   // the server(error)
//   const data = await cache.get(url);
//   return data ? { ok: true, data } : response;
// };

// We want to protect our apis - when we make request to get listings for a particular user then only authorized
// users should get listings. To know if user is authorized we should send a token along the request. If we dont send
// token or send a wrong token then server will return a error
// apiClient.addAsyncRequestTransform is a common method which will send a token everytime a request is made
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await AuthStorage.getToken();
  if (!authToken) return;
  // Adding token to a request header
  // key of token on server - x-auth-token
  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
