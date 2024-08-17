import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color, fonts) {
    return StyleSheet.create({
        container: {
            width: wp(100),
            height: hp(10),
            justifyContent: "flex-end",
            alignItems: "center"
        },
        text: {
            fontFamily: fonts.dosis,
            marginBottom: hp(1),
            fontSize: hp(2.7),
            color: color.cream
        },
        button: {
            width: wp(91),
            height: hp(5),
            borderRadius: 8,
            alignItems: "center",
            borderColor: color.cream,
            borderWidth: 2
        },
        buttonText:{
            fontFamily: fonts.edufont,
            fontSize: hp(2.5),
            color: color.darkGreen
        }
    })
}