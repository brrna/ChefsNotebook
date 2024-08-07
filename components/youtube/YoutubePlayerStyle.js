import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createdStyle(fonts, color) {
    return StyleSheet.create({
        container: {
            height: hp(35),
            width: wp(100),
            justifyContent: "center"
        },
        web: {
            height: hp(25)
        },
        textView: {
            height: hp(5),
            width: wp(100),
            marginLeft: wp(3)
        },
        text: {
            fontSize: hp(2.5),
            fontFamily: fonts.dosis,
            fontWeight: "700",
            color: color.lightGreen
        }
    })
}