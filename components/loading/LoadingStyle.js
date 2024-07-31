import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyles(color) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.green,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontSize: hp(3)
        }
    })
}