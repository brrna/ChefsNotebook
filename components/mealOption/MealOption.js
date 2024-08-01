import { useContext } from "react"
import { View, Text, Image } from "react-native"
import createStyle from "./MealOptionStyle";
import { ColorContext } from "../../context/ThemeContext/ColorContext";
import { FontContext } from "../../context/FontContext/FontContext"

const MealOption = ({option, img = [""], }) => {

    let {color} = useContext(ColorContext);
    let {fonts} = useContext(FontContext);

    const styles = createStyle(color, fonts)

    return(
        <View style={styles.container} >
            <Image 
                source={img}
                style={styles.image} />
            <Text style={styles.text} > {option}</Text>
        </View>
    )
}

export default MealOption;