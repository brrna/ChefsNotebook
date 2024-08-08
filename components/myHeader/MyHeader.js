import { View, Text } from "react-native"
import createStyles from "./MyHeaderStyle"
import { useContext } from "react"
import { FontContext } from "../../context/FontContext/FontContext"

const MyHeader = ({header, textColor}) => {

    let {fonts} = useContext(FontContext);
    
    const styles = createStyles(fonts, textColor);

    return(
        <View style={styles.container} >
            <Text style={styles.text} >{header}</Text>
        </View>
    )
}

export default MyHeader