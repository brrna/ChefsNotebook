import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { FontContext } from '../context/FontContext/FontContext';
import { useSelector } from 'react-redux';

const Splash = () => {

  const color = useSelector((state) => state.color )
  let { fonts } = useContext(FontContext)

  const styles = createStyles(color, fonts);

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.view} >
        <Image
          style={styles.image}
          source={require("../assets/images/logo.jpeg")} />
        <Text style={styles.text}>
          chef's notebook
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash

const createStyles = (color, fonts) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.green,
      justifyContent: "center",
      alignItems: "center"
    },
    view: {
      marginBottom: hp(10)
    },
    image: {
      height: hp(40),
      width: wp(60)
    },
    text: {
      fontFamily: fonts.handwrite,
      fontSize: hp(6),
      color: color.cream
    }
  })
}