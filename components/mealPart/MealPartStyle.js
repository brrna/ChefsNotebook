import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color, fonts) {
    return StyleSheet.create({
        container: {
            height: hp(62),
            width: wp(100),
            alignItems: "center"
        },
        headerView: {
            height: hp(8),
            justifyContent: "center",
            alignItems: "center"
        },
        headerText: {
            fontFamily: fonts.handwrite,
            fontSize: wp(5),
            color: color.navyBlue
        },
        mealView: {
            backgroundColor: color.green,
            width: wp(100),
            height: hp(58),
            borderTopRightRadius: wp(49),
            borderTopLeftRadius: wp(49)
        },
        firstView: {
            height: hp(62),
            width: wp(100),
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontFamily: fonts.handwrite,
            fontSize: wp(8),
            color: color.darkGreen
        }
    })
}