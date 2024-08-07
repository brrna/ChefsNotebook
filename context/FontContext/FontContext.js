import { createContext } from "react";
import { AguafinaScript_400Regular } from "@expo-google-fonts/aguafina-script";
import { useFonts } from "expo-font";
import edufont from "../../assets/fonts/edufont.ttf"
import dosis from "../../assets/fonts/dosis.ttf"

export const FontContext = createContext();

export const FontContextProvider = (props) => {

  const [fontsLoaded] = useFonts({
    AguafinaScript_400Regular,
    edufont,
    dosis
  });

  if (!fontsLoaded) {
    return null; // Fontlar yüklenene kadar herhangi bir şey göstermeyin
  }

  const fonts = {
    handwrite: "AguafinaScript_400Regular",
    edufont: "edufont",
    dosis: "dosis"
  };

  return (
    <FontContext.Provider
      value={{ fonts }} >
      {props.children}
    </FontContext.Provider>
  )
}