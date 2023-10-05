// apisauce  -
// Wrapper around axios(popular library to call apis)
// To call apis
// Apisauce - Axios + standardized erros + request/response transforms
// Best part about apisauce - whenever we call server, the underlined promise is always resolved even if we have error
// so we dont need to add try/catch block. We just take the response and check if there is error

import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.0.0.26:9000/api",
});

// // whenevr we call server,the promise is always resolved. Whe promise is resolved, we get response object
// apiClient.get("/listings").then((reponse) => {
//   // instead of try/catch we can use response.ok to check if any error
//   // if !response.ok -> response.problem
//   // response.problem is a string and it can be CLIENT_ERROR, SERVER_ERROR, TIMEOUT_ERROR etc (standardized errors)
// });

export default apiClient;
