import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color, fonts) {
    return StyleSheet.create({
        container: {
            height: hp(63),
            width: wp(100),
            alignItems: "center",
            justifyContent: "space-evenly"
        },
        image: {
            backgroundColor: "purple",
            height: hp(35),
            width: wp(69),
            borderRadius: 10000000,
            resizeMode: "contain",
            marginBottom: hp(1),
            borderWidth: wp(1),
            borderColor: color.cream
        },
        text: {
            fontSize: hp(3.5),
            fontFamily: fonts.handwrite,
            color: color.cream,
            marginBottom: hp(5)
        }
    })
}