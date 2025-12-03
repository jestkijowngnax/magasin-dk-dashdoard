import axios, {
  AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStr = localStorage.getItem("user");

    if (userStr) {
      try {
        const user = JSON.parse(userStr);

        if (user.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          console.error("Unauthorized access - token may be expired");

          localStorage.removeItem("user");

          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
          break;

        case 403:
          console.error("Forbidden - insufficient permissions");
          break;

        case 404:
          console.error("Resource not found");
          break;

        case 500:
          console.error("Internal server error");
          break;

        default:
          console.error(`API Error: ${status}`);
      }
    } else if (error.request) {
      console.error("No response from server - check network connection");
    } else {
      console.error("Request error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
