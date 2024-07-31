import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyle(color) {
    return StyleSheet.create({
        container: {
            backgroundColor: "red",
            borderColor: "black",
            borderWidth: 1,
            width: wp(100),
            height: hp(14),
            justifyContent: "center",
            alignItems: "center"
        }
    })
}