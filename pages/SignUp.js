import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MyInput from '../components/myInput/MyInput';
import MyButton from '../components/MyButton/myButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const SignUp = () => {

  const color = useSelector((state) => state.color);

  const styles = createStyles(color)

  return (
    <SafeAreaView
      style={styles.container}>
      <View style={styles.view} >
        <MyInput placeholder={"first name"} />
      </View>
      <View style={styles.view} >
        <MyInput placeholder={"last name"} />
      </View>
      <View style={styles.view} >
        <MyInput placeholder={"username"} />
      </View>
      <View style={styles.view} >
        <MyInput placeholder={"email"} />
      </View>
      <View style={styles.view} >
        <MyInput placeholder={"password"} />
      </View>
      <View style={styles.view} >
        <MyInput placeholder={"password repeat"} />
      </View>
      <MyButton buttonText={"sign up"} />
    </SafeAreaView>
  )
}

export default SignUp

const createStyles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.darkGreen,
      alignItems: "center",
    },
    view: {
      width: wp(100),
      height: hp(12),
      justifyContent: "center"
    }
  })
}