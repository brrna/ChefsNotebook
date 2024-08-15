import { combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./color/themeSlice";
import fontsReducer from "./fonts/fontsSlice";

const rootReducer = combineReducers({
    color: colorReducer,
    fonts: fontsReducer
});

export default rootReducer;
