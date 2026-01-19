import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

const env = "development";
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (env === "development") {
      console.log(`[request] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response?.status) {
        case 401:
          console.error("Unauthorized access");
          break;

        case 403:
          console.error("Forbidden: you do not have  permission!");
          break;

        case 500:
          console.error("server error");
          break;

        default:
          console.error("Something went wrong!!!");
      }
    } else if (error.request) {
      console.error("Network Error: No response received");
    }
    return Promise.reject(error);
  },
);

export default api;
