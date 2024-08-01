import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(color) {
    return StyleSheet.create({
        container: {
            borderColor: "black",
            borderWidth: 1,
            height: hp(60),
            width: wp(100),
            alignItems: "center"
        },
        header: {
            backgroundColor: "red",
            height: hp(5),
            width: wp(100)
        },
        headerText: {}
    })
}