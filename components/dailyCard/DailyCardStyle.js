import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createdStyle(color, fonts) {
    return StyleSheet.create({
        container: {
            backgroundColor: color.navyBlue,
            height: hp(60),
            width: wp(75),
            borderRadius: wp(5)
        },
        img: {
            height: hp(38),
            width: wp(75),
            resizeMode: "contain",
            borderTopRightRadius: wp(5),
            borderTopLeftRadius: wp(5)
        },
        textView: {
            height: hp(22),
            width: wp(75),
            padding: wp(3)
        },
        text: {
            fontSize: hp(3),
            color: color.white
        }
    })
}