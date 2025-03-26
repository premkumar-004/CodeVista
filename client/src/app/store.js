import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
export const appStore = configureStore({
    reducer: {
        // Add reducers here
        auth: authReducer,
    }
});