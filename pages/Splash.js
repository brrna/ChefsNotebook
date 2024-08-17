import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useSelector } from 'react-redux';

const Splash = () => {

  const image = require("../assets/images/splash.jpeg")

  const color = useSelector((state) => state.color)
  const fonts = useSelector((state) => state.fonts.fonts)

  const styles = createStyles(color, fonts)

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar />
      <ImageBackground 
        resizeMode="cover"
        style={styles.image}
        source={image}
        blurRadius={5} >
          <View style={styles.view} >
            <Text style={styles.text} >chef's notebook</Text>
          </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default Splash

const createStyles = (color, fonts) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      height: hp(100),
      width: wp(100),
    },
    view: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      height: hp(100),
      width: wp(100),
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: color.navyBlue,
      fontFamily: fonts.handwrite,
      fontSize: hp(8),
      marginBottom: hp(40)
    }
  })
}