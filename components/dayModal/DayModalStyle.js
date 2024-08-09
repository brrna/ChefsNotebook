import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createdStyle(color, height, marginTop, fonts) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.cream,
        },
        scrollview: {
            backgroundColor: color.cream,
        },
        imageView: {
            backgroundColor: color.cream,
            height: height,
        },
        imageTopView: {
            backgroundColor: color.navyBlue,
            height: hp(38),
            width: wp(100),
            borderBottomLeftRadius: wp(75),
            alignItems: "center",
            position: "absolute"
        },
        image: {
            height: hp(35),
            width: wp(70),
            borderRadius: 100000000,
            position: "absolute",
            marginTop: marginTop
        },
        contentView: {
            flex: 1,
            backgroundColor: color.navyBlue,
            width: wp(100),
            borderTopLeftRadius: hp(5),
            borderTopRightRadius: hp(5)
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
            color: color.cream,
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