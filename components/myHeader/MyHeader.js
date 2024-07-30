import { View, Text } from "react-native"
import createStyles from "./MyHeaderStyle"
import { useContext } from "react"
import { ColorContext } from "../../context/ThemeContext/ColorContext"

const MyHeader = () => {

    let {color} = useContext(ColorContext);
    
    const styles = createStyles(color)

    return(
        <View style={styles.container} >
            <Text style={styles.text} >Chef's Notebook</Text>
        </View>
    )
}

export default MyHeader