import { combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./color/themeSlice";
import fontsReducer from "./fonts/fontsSlice";
import mealReducer from "./meal/mealSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
    color: colorReducer,
    fonts: fontsReducer,
    meal: mealReducer,
    user: userReducer
});

export default rootReducer;
