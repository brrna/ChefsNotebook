import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { ColorContext } from '../context/ThemeContext/ColorContext';
import { FontContext } from '../context/FontContext/FontContext';

const Splash = () => {

  let { color } = useContext(ColorContext);
  let { fonts } = useContext(FontContext)

  const navigation = useNavigation();
  const styles = createStyles(color, fonts);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("CategoriesScreen");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

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