import { SafeAreaView, StatusBar, Text } from "react-native"
import createStyles from "./ErrorStyle"
import { useContext } from "react"
import { ColorContext } from "../../context/ThemeContext/ColorContext"
import LottieView from "lottie-react-native"

const Error = () => {

    let { color } = useContext(ColorContext)

    const styles = createStyles(color)

    return(
        <SafeAreaView style={styles.container} >
           <StatusBar />
           <LottieView 
             style={styles.lottie}
             source={require("../../assets/animations/error.json")}
             autoPlay
             loop />
        </SafeAreaView>
    )
}

export default Error