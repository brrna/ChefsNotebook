import { useFonts } from "expo-font";
import { useDispatch } from "react-redux"
import { AguafinaScript_400Regular } from "@expo-google-fonts/aguafina-script";
import edufont from "../assets/fonts/edufont.ttf"
import dosis from "../assets/fonts/dosis.ttf"
import { useEffect } from "react";
import { setFonts, setFontsLoaded } from "../redux/fonts/fontsSlice";

export const useFontsLoaded = () => {

    const dispatch = useDispatch();

    const [fontsLoaded] = useFonts({
        AguafinaScript_400Regular,
        edufont,
        dosis
    })

    useEffect(() => {
        if(fontsLoaded) {
            dispatch(setFonts());
            dispatch(setFontsLoaded(true));
        }
    }, [fontsLoaded, dispatch]);

    return fontsLoaded;
}