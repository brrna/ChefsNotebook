import { createContext } from "react";
import { useFonts, AguafinaScript_400Regular } from "@expo-google-fonts/aguafina-script";

export const FontContext = createContext();

export const FontContextProvider = (props) => {

    const [fontsLoaded] = useFonts({
        AguafinaScript_400Regular,
      });
    
      if (!fontsLoaded) {
        return null; // Fontlar yüklenene kadar herhangi bir şey göstermeyin
      }

      const fonts = { handwrite: "AguafinaScript_400Regular" };

    return(
        <FontContext.Provider
            value={{ fonts }} >
             {props.children}
        </FontContext.Provider>
    )
}