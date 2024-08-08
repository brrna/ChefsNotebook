import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createdStyle(color) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.cream,
            alignItems: "center",
        },
        imageView: {
            backgroundColor: color.cream,
            height: hp(55)
        },
        imageTopView: {
            backgroundColor: color.navyBlue,
            height: hp(33),
            width: wp(150),
            borderBottomLeftRadius: wp(72),
            borderBottomRightRadius: wp(72),
            alignItems: "center"
        },
        image: {
            height: hp(35),
            width: wp(70),
            backgroundColor: "yellow",
            borderRadius: 100000000,
            position: "absolute",
            marginTop: wp(30)
        },
        contentView: {
            backgroundColor: "white",
            width: wp(100),
            height: hp(45),
            borderTopLeftRadius: hp(5),
            borderTopRightRadius: hp(5)
        }
    }) 
}