import {createContext} from "react";
import { color } from "./Colors";

export const ColorContext = createContext();

export const ColorContextProvider = (props) => {
    return(
        <ColorContext.Provider
            value={{color}}>
        {props.children}
        </ColorContext.Provider>
    )
}