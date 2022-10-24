import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import reducer from "../reducers";

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
    ],
    devTools: process.env.NODE_ENV !== "production",
});
