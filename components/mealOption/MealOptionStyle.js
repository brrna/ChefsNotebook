import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyle(color, fonts) {
    return StyleSheet.create({
        container: {
            backgroundColor: "red",
            borderColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            width: wp(32),
            height: hp(16)
        },
        image: {
            height: hp(13),
            width: wp(26),
            borderRadius: 1000000,
            resizeMode: "center",
        },
        text: {
            fontSize: hp(2)
        }
    })
}