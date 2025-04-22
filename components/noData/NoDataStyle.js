import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function createdStyle (color) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.white,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontSize: hp(3)
        }
    })
}