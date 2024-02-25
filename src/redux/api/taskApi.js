import { baseApi } from "./baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    taskList: build.query({
      query: (params) => ({
        url: "/task/get",
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    taskCreate: build.mutation({
      query: (productData) => ({
        url: "/task/add",
        method: "POST",
        data: productData,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useTaskListQuery, useTaskCreateMutation } = taskApi;
