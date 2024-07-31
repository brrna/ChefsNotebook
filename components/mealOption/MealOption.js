import { useContext } from "react"
import { View, Text, Image } from "react-native"
import createStyle from "./MealOptionStyle";
import { ColorContext } from "../../context/ThemeContext/ColorContext";
import { FontContext } from "../../context/FontContext/FontContext"

const MealOption = ({option, img}) => {

    let {color} = useContext(ColorContext);
    let {fonts} = useContext(FontContext);

    const styles = createStyle(color, fonts)

    console.log("Option:", option); // Log to verify props
    console.log("Image URL:", img); 

    return(
        <View style={styles.container} >
            <Image 
                style={styles.image}
                source={{uri: img}} />
            <Text style={styles.text} >{option}</Text>
        </View>
    )
}

export default MealOption;