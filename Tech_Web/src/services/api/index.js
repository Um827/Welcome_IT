import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const get = (api) => apiInstance.get(api);

export const post = (api, body) => apiInstance.post(api, body);
