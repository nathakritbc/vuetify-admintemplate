import axios, { AxiosResponse, AxiosError } from "axios";
const { VITE_BASE_URL } = import.meta.env;
import { TOKEN, TOKEN_SUPER, AUTH } from "@/Constants";
import { getStringCookie, getCookie } from "./jsCookie";

const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config: any) => {
    let isSuper = getCookie(AUTH.isLoginSuper);
    let token = getStringCookie(TOKEN);
    if (isSuper) {
      token = getStringCookie(TOKEN_SUPER);
    }
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default api;
