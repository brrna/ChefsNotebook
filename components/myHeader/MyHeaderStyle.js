import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color) {
    return StyleSheet.create({
        container: {
            height: hp(8),
            width: wp(100),
            backgroundColor: "red",
            justifyContent: "center",
            padding: wp(2)
        },
        text: {
            color: color.cream,
            fontSize: hp(5)
        }
    })
}