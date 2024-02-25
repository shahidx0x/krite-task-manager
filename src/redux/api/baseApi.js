import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://task-mgr-899d.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["task"],
});
