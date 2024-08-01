import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export default function createStyle(color) {
    return StyleSheet.create({
        container: {
            height: hp(16)
        }
    })
}