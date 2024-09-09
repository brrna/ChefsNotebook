import { View, Image, Pressable } from "react-native"
import createStyle from "./MealOptionStyle";
import { useSelector } from "react-redux";

const MealOption = ({ img = [""], onPress}) => {

    const color = useSelector((state) => state.color)
    const fonts = useSelector((state) => state.fonts.fonts)

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