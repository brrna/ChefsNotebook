import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color, fonts) {
    return StyleSheet.create({
        container: {
            height: hp(9),
            width: wp(100),
            justifyContent: "center",
            alignItems: "center"
        },
        inputView: {
            height: hp(7),
            width: wp(90),
            borderBottomWidth: 2,
            borderBottomColor: color.cream,
            justifyContent: "flex-end"
        },
        inputText: {
            fontFamily: fonts.dosis,
            fontSize: hp(3),
            color: color.cream
        }
    })
}