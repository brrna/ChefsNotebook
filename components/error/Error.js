import { SafeAreaView, StatusBar, Text } from "react-native"
import createStyles from "./ErrorStyle"
import { useContext } from "react"
import { ColorContext } from "../../context/ThemeContext/ColorContext"

const Error = () => {

    let { color } = useContext(ColorContext)

    const styles = createStyles(color)

    return(
        <SafeAreaView style={styles.container} >
           <StatusBar />
           <Text style={styles.text} >error fetching data</Text> 
        </SafeAreaView>
    )
}

export default Error