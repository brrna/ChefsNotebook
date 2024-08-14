import { useContext } from "react"
import { View, Image, Pressable } from "react-native"
import createStyle from "./MealOptionStyle";
import { FontContext } from "../../context/FontContext/FontContext"
import { useSelector } from "react-redux";

const MealOption = ({ img = [""], onPress}) => {

    const color = useSelector((state) => state.color)
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