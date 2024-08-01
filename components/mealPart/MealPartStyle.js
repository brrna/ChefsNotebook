import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color) {
    return StyleSheet.create({
        container: {
            borderWidth: 1,
            height: hp(65),
            width: wp(100),
            alignItems: "center",
        },
        mealView: {
            backgroundColor: color.green,
            width: wp(100),
            height: hp(58),
            borderWidth: 1,
            borderColor: "black",
            borderTopRightRadius: wp(50),
            borderTopLeftRadius: wp(50)
        }
    })
}