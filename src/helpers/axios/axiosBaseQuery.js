import { axiosInstance } from "./axiosInstance";

export const axiosBaseQuery =
  ({ baseUrl = "" } = { baseUrl: "" }) =>
  async ({ url, method, data, params, contentTypes }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentTypes || "application/json",
        },
      });
      return result;
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status || 500,
          message: err.response?.data || err.message,
        },
      };
    }
  };
