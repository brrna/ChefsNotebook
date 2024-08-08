import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(fonts, textColor) {
    return StyleSheet.create({
        container: {
            height: hp(11),
            width: wp(100),
            justifyContent: "center",
            padding: wp(2)
        },
        text: {
            color: textColor,
            fontSize: hp(5),
            fontFamily: fonts.handwrite,
            marginLeft: wp(3),
            marginTop: hp(1)
        }
    })
}