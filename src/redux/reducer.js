import { combineReducers } from "redux";
import authSlices from "./slice/auth.slices";
import { baseApi } from "./api/baseApi";

export const rootReducer = combineReducers({
  auth: authSlices,
  [baseApi.reducerPath]: baseApi.reducer,
});
