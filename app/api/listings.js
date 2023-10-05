import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export const addListing = (listing) => {
  // content-type = whenever request is made to the server, special type of header is sent that tells server
  // about the type of data request contains
  // for json data - application/json
  // for uploading files and images - multipart/form-data
  //   we are not manually sending content-type, we are sending FormData object. When formdata object is sent
  // apisauce sets content-type to form-data

  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  //   In string format
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  // post() returns promise
  return client.post(endpoint, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default {
  addListing,
  getListings,
};
