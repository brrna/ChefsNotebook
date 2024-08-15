import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: null
}

const mealSlice = createSlice({
    name: "meal",
    initialState,
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload;
        }
    }
})

export const {setSelectedCategory} = mealSlice.actions;
export default mealSlice.reducer;