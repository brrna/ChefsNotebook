import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function createStyles(fonts) {
    return StyleSheet.create({
        container: {
            position: "absolute",
            width: wp(100),
            height: hp(11),
            justifyContent: "center"
        },
        backButton: {
            height: hp(8),
            width: wp(14),
            marginLeft: wp(3),
            justifyContent: "center",
            alignItems: "center"
        }
    })
}