import axios from "axios";
import { getLocalStorage } from "../../utils/localStorage";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getLocalStorage("token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const finalResponse = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return finalResponse;
  },
  function (error) {
    const finalResponse = {
      status: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
    };
    return Promise.reject(finalResponse);
  }
);

export { instance as axiosInstance };
