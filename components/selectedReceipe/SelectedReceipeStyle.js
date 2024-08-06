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
            marginTop: hp(0.5)
        },
        headerText: {
            fontSize: hp(2.2),
            marginLeft: wp(3),
            marginTop: hp(1.5)
        },
        ingredientsView: {
            width: wp(100)
        },
        ingredientItem: {
            width: wp(95),
            height: hp(4),
            flexDirection: "row",
            alignItems: "center",
            marginLeft: wp(3)
        },
        item: {
            height: 10,
            width: 10,
            borderRadius: 1000000,
            backgroundColor: color.navyBlue
        },
        instructionView: {
            padding: wp(1.8)
        }
    })
}