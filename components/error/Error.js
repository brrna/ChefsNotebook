import { SafeAreaView, StatusBar } from "react-native"
import createStyles from "./ErrorStyle"
import LottieView from "lottie-react-native"
import { useSelector } from "react-redux"

const Error = () => {

    const color = useSelector((state) => state.color)

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