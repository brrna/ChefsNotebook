import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color, fonts) {
    return StyleSheet.create({
        container: {
            height: hp(11),
            width: wp(100),
            backgroundColor: color.green,
            justifyContent: "center",
            padding: wp(2),
            borderBottomRightRadius: wp(10),
            borderBottomLeftRadius: wp(10)
        },
        text: {
            color: color.cream,
            fontSize: hp(5),
            fontFamily: fonts.handwrite,
            marginLeft: wp(3),
            marginTop: hp(1)
        }
    })
}