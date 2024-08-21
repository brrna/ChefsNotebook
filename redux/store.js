import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => 
        getDefaultMiddlware({serializableCheck: false})
})

export default store;