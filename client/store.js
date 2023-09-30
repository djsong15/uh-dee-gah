import { configureStore } from "@reduxjs/toolkit";
import locReducer from "./reducers/locations";
import userReducer from "./reducers/user";

export const store = configureStore({
    reducer: {
        locations: locReducer,
        user: userReducer
    }
});