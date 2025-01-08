import axios from "axios";
import { config } from "@/config";

type ConfigType = {
    headers:any;
}
const api = axios.create({
  baseURL: config.apiURL,
});

api.interceptors.request.use((config:ConfigType) => {
    let accessToken = "";
    const userAdmin = localStorage.getItem("USER_ADMIN");
    if(userAdmin){
        accessToken = JSON.parse(userAdmin).accessToken;
    }
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjIxLzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0Nzc4NTYwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3OTMzMjAwfQ.HdSOdENfWNAr5C4CemzCCFNsB1DIvQDRBpEJSsOdpA8",
  };
  return config;
});
export default api;
