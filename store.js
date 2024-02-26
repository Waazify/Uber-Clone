import { configureStore } from "@reduxjs/toolkit";
import navReduver from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReduver,
    },
});