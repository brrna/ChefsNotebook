import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("CategoriesScreen")
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={styles.container} >
      <Image 
        style={styles.image}
        source={require("../assets/images/logo.jpeg")} />
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6eaa86",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: hp(40),
    width: wp(60)
  }
})