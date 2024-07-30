import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script';
import { ColorContext } from '../context/ThemeContext/ColorContext';

const Splash = () => {

  let { color } = useContext(ColorContext);

  const navigation = useNavigation();

  const styles = createStyles(color);

  const [fontsLoaded] = useFonts({
    AguafinaScript_400Regular,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("CategoriesScreen");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // Wait for the fonts to load
  }

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

const createStyles = (color) => {
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
      fontFamily: "AguafinaScript_400Regular",
      fontSize: hp(6)
    }
  })
}