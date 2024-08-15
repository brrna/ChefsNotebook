import { View, Text } from "react-native"
import createStyles from "./MyHeaderStyle"
import { useContext } from "react"
import { useSelector } from "react-redux"

const MyHeader = ({header, textColor}) => {

    const fonts = useSelector((state) => state.fonts.fonts)
    
    const styles = createStyles(fonts, textColor);

    return(
        <View style={styles.container} >
            <Text style={styles.text} >{header}</Text>
        </View>
    )
}

export default MyHeader