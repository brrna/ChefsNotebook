import {createContext} from "react";
import { colors } from "./Colors";

export const ColorContext = createContext();

const color = colors;

export const ColorContextProvider = (props) => {
    return(
        <ColorContext.Provider
            value={{color}}>
        {props.children}
        </ColorContext.Provider>
    )
}