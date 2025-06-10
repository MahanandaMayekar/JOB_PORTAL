import { configureStore } from "@reduxjs/toolkit";
import { LoginApi } from "./login/LoginService";
import { registerApi } from "./register/registerService"

import { jobApi } from "./jobs/jobService";
import searchReducer from "./search/SearchSlice"
export const store = configureStore({
  reducer: {
    [LoginApi.reducerPath]: LoginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,

    search:searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(LoginApi.middleware)
      .concat(registerApi.middleware)
      .concat(jobApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
