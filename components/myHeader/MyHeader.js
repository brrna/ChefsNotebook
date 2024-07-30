import { View, Text } from "react-native"
import createStyles from "./MyHeaderStyle"
import { useContext } from "react"
import { ColorContext } from "../../context/ThemeContext/ColorContext"
import { FontContext } from "../../context/FontContext/FontContext"

const MyHeader = () => {

    let {color} = useContext(ColorContext);
    let {fonts} = useContext(FontContext);
    
    const styles = createStyles(color, fonts)

    return(
        <View style={styles.container} >
            <Text style={styles.text} >Chef's Notebook</Text>
        </View>
    )
}

export default MyHeader