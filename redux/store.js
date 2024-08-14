import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./themeSlice"

export const store = configureStore({
    reducer: {
        color: colorReducer
    }
})