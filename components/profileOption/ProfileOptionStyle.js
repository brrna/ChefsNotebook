import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyles(color, fonts) {
    return StyleSheet.create({
        option: {
            borderBottomWidth: 1,
            borderColor: color.darkGreen,
            width: wp(100),
            height: hp(10),
            padding: wp(3),
            flexDirection: "row",
            alignItems: "center"
        },
        textView: {
            height: hp(5),
            width: wp(80),
            justifyContent: "center"
        },
        text: {
            marginLeft: wp(3),
            color: color.darkGreen,
            fontSize: hp(3),
            fontFamily: fonts.dosis
        }
    })
}