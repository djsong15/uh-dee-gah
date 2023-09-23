import { configureStore } from "@reduxjs/toolkit";
import locReducer from "./reducers/locations";

export const store = configureStore({
    reducer: {
        locations: locReducer
    }
});