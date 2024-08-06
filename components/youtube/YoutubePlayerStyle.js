import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createdStyle() {
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
            fontSize: hp(2.5)
        }
    })
}