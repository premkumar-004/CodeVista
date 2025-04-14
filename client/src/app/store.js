import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import { authApi } from "@/features/api/authApi.js";

export const appStore = configureStore({
    reducer: {
        auth: rootReducer,
        [authApi.reducerPath]: authApi.reducer, // Ensure API reducer is added
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware), // Middleware should be outside reducer
});
