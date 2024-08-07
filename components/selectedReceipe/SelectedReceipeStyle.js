import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(fonts, color) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: wp(100),
        },
        image: {
            height: hp(40),
            width: wp(100),
        },
        nameView: {
            position: "absolute",
            height: hp(38),
            width: wp(100),
            justifyContent: "flex-end",
        },
        nameText: {
            fontFamily: fonts.handwrite,
            fontSize: hp(4),
            marginLeft: wp(1),
            color: color.cream,
            backgroundColor: "rgba(0, 0, 0, 0.2)"
        },
        textView: {
            width: wp(100)
        },
        areaText: {
            fontSize: hp(2.5),
            marginLeft: wp(3),
            marginTop: hp(0.5),
            fontFamily: fonts.edufont,
            color: color.lightGreen
        },
        headerText: {
            fontSize: hp(4),
            marginLeft: wp(3),
            marginBottom: wp(2),
            fontFamily: fonts.dosis,
            fontWeight: "600",
            color: color.green
        },
        ingredientsView: {
            width: wp(100),
            padding: wp(4)
        },
        ingredientItem: {
            width: wp(95),
            height: hp(4),
            flexDirection: "row",
            alignItems: "center",
            
        },
        ingredient: {
            fontFamily: fonts.edufont,
            color: color.navyBlue,
            fontSize: hp(2.5)
        },
        item: {
            height: 10,
            width: 10,
            borderRadius: 1000000,
            backgroundColor: color.green
        },
        instructionView: {
            padding: wp(3)
        }
    })
}