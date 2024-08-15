import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fontsLoaded: false,
    fonts: {
        handwrite: null,
        edufont: null,
        dosis: null,
    }
}

const fontsSlice = createSlice({
    name: "fonts",
    initialState,
    reducers: {
        setFontsLoaded(state, action) {
            state.fontsLoaded = action.payload;
        },
        setFonts(state) {
            state.fonts = {
                handwrite: 'AguafinaScript_400Regular',
                edufont: 'edufont',
                dosis: 'dosis'
            }
        }
    }
})

export const {setFontsLoaded, setFonts} = fontsSlice.actions;
export default fontsSlice.reducer;