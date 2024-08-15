import { combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./color/themeSlice";
import fontsReducer from "./fonts/fontsSlice";
import mealReducer from "./meal/mealSlice"

const rootReducer = combineReducers({
    color: colorReducer,
    fonts: fontsReducer,
    meal: mealReducer
});

export default rootReducer;
