import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createdStyle(color, height, marginTop) {
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
            alignItems: "center"
        },
        image: {
            height: hp(35),
            width: wp(70),
            backgroundColor: "yellow",
            borderRadius: 100000000,
            position: "absolute",
            marginTop: marginTop
        },
        contentView: {
            backgroundColor: "white",
            width: wp(100),
            borderTopLeftRadius: hp(5),
            borderTopRightRadius: hp(5)
        }
    }) 
}