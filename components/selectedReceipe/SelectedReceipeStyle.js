import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(fonts, color) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: wp(100),
            backgroundColor: "pink",
        },
        image: {
            height: hp(30),
            width: wp(100),
            backgroundColor: "purple"
        },
        nameView: {
            position: "absolute",
            height: hp(30),
            width: wp(100),
            justifyContent: "flex-end",
        },
        nameText: {
            fontFamily: fonts.handwrite,
            fontSize: hp(4),
            marginLeft: wp(1),
            color: color.cream,
            backgroundColor: "rgba(0, 0, 0, 0.2)"
        }
    })
}