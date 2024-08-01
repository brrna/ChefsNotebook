import { createContext, useState } from "react";

export const MealContext = createContext();

export const MealContextProvider = (props) => {

    const [selectedCategory, setSelectedCategory] = useState(null)

    return(
        <MealContext.Provider
            value={{ selectedCategory, setSelectedCategory }} >
             {props.children}
        </MealContext.Provider>
    )
}