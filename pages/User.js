import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const User = () => {

    const color = useSelector((state) => state.color)
    const fonts = useSelector((state) => state.fonts.fonts)

    const styles = createStyles(color, fonts)

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={{ flex: 1 }}  >
                <View style={styles.headerView} >
                    <Text style={styles.headerText} >USER     AGREEMENT</Text>
                </View>

                <Text style={styles.textStyle} >
                    Please read the following terms carefully before using this application.{"\n\n"}

                    1. About the App{"\n"}
                    This mobile application is a simple information tool that allows users to access meal recipes. Recipe data is provided by a third-party open API: “TheMealDB” (https://www.themealdb.com).{"\n\n"}{"\n\n"}

                    2. Terms of Use{"\n"}
                    The app is intended for educational and personal use only. It is non-commercial and does not generate any revenue. The developer is a student who created the app for learning and portfolio purposes.{"\n\n"}{"\n\n"}

                    3. Disclaimer{"\n"}
                    All content such as recipes and images is provided by a third-party service. The accuracy or completeness of this data is not guaranteed. Use of this information is at the user’s own risk.{"\n\n"}{"\n\n"}

                    4. Data Privacy{"\n"}
                    The app does not request, collect, or store any personal user data.{"\n\n"}{"\n\n"}

                    5. Right to Modify{"\n"}
                    The developer reserves the right to change the content of this user agreement at any time.{"\n\n"}{"\n\n"}

                    By continuing to use this app, you agree to the above terms.{"\n\n"}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default User

const createStyles = (color, fonts) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.navyBlue,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
        },
        textStyle: {
            fontSize: 16,
            fontFamily: fonts.edufont,
            color: color.white,
        },
        headerView: {
            width: wp(100),
            height: hp(10),
            justifyContent: "center",   
            alignItems: "center",
        },
        headerText: {
            fontSize: 20,
            fontFamily: fonts.edufont,
            color: color.white,
        },
    })

}