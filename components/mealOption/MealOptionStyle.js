import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyle(color) {
    return StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            width: wp(32),
            height: hp(16)
        },
        press: {
            height: hp(11),
            width: wp(22),
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: color.darkGreen,
            borderRadius: wp(5),
            backgroundColor: color.cream
        },
        image: {
            height: hp(13),
            width: wp(28),
            borderRadius: 1000000,
            resizeMode: "center",
        },
        text: {
            fontSize: hp(2)
        }
    })
}