import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    green: "#6eaa86",
    darkGreen: "#204143",
    lightGreen: "#8aa88e",
    cream: "#fefae0",
    navyBlue: "#07213c",
    white: "#fefefc"
};

const themeSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {}
})

export default themeSlice.reducer;