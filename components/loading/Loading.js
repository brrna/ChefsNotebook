import { useContext } from "react"
import { SafeAreaView, StatusBar, Text } from "react-native"
import { ColorContext } from "../../context/ThemeContext/ColorContext"
import createStyles from "./LoadingStyle";

const Loading = () => {

    let {color} = useContext(ColorContext);

    const styles = createStyles(color);

    return(
        <SafeAreaView style={styles.container} >
            <StatusBar/>
            <Text style={styles.text} >loading...</Text>
        </SafeAreaView>
    )
}

export default Loading