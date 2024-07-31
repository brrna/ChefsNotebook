import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyle(color, fonts) {
    return StyleSheet.create({
        container: {
            backgroundColor: color.green,
            borderColor: "black",
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            width: wp(100),
            height: hp(18)
        },
        image: {
            height: hp(16),
            width: wp(32),
            borderRadius: 1000000,
            marginLeft: wp(7),
            resizeMode: "contain"
        },
        text: {
            marginLeft: wp(5),
            fontSize: hp(3)
        }
    })
}