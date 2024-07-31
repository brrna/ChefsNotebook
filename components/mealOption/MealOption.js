import { useContext } from "react"
import { View, Text } from "react-native"
import createStyle from "./MealOptionStyle";
import { ColorContext } from "../../context/ThemeContext/ColorContext";

const MealOption = ({option}) => {

    let {color} = useContext(ColorContext);

    const styles = createStyle(color)

    return(
        <View style={styles.container} >
            <Text>{option}</Text>
        </View>
    )
}

export default MealOption;