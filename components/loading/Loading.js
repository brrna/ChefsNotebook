import { useContext } from "react"
import { SafeAreaView, StatusBar, Text } from "react-native"
import { ColorContext } from "../../context/ThemeContext/ColorContext"
import createStyles from "./LoadingStyle";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";

const Loading = ({src}) => {

    const color = useSelector((state) => state.color)

    const styles = createStyles(color);

    return(
        <SafeAreaView style={styles.container} >
            <StatusBar/>
            <LottieView 
                style={styles.lottie}
                loop
                autoPlay
                source={src} />
        </SafeAreaView>
    )
}

export default Loading