import { useContext } from "react"
import { View, Text, Image, Pressable } from "react-native"
import createStyle from "./MealOptionStyle";
import { ColorContext } from "../../context/ThemeContext/ColorContext";
import { FontContext } from "../../context/FontContext/FontContext"

const MealOption = ({ img = [""], onPress}) => {

    let { color } = useContext(ColorContext);
    let { fonts } = useContext(FontContext);

    const styles = createStyle(color, fonts)

    return (
        <View style={styles.container} >
            <Pressable 
                onPress={onPress}
                style={styles.press}>
                <Image
                    source={img}
                    style={styles.image} />
            </Pressable>
        </View>
    )
}

export default MealOption;