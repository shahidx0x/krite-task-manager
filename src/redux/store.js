import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import createMigrate from "redux-persist/es/createMigrate";
import { baseApi } from "./api/baseApi";
const migrations = {
  0: (state) => {
    return {
      ...state,
      maintain: false,
    };
  },
};
const persistConfig = {
  key: "persist-key",
  storage,
  version: 0,
  debug: true,
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, { debug: true }),
};
const persist_reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persist_reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});
const parsistor = persistStore(store);
export default store;
export { parsistor };
