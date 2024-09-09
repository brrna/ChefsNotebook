import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MyInput from '../components/myInput/MyInput';
import MyButton from '../components/MyButton/myButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = () => {

  const color = useSelector((state) => state.color);

  const styles = createStyles(color)

  return (
    <KeyboardAwareScrollView
      style={styles.content}>
      <View style={styles.container} >
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
          <MyInput placeholder={"email"} keyboardType={"email-address"} />
        </View>
        <View style={styles.view} >
          <MyInput placeholder={"password"} />
        </View>
        <View style={styles.view} >
          <MyInput placeholder={"password repeat"} />
        </View>
        <MyButton buttonText={"sign up"} />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp

const createStyles = (color) => {
  return StyleSheet.create({
    content: {
      flexGrow: 1
    },
    container: {
      backgroundColor: color.darkGreen,
      alignItems: "center",
      height: hp(100)
    },
    view: {
      width: wp(100),
      height: hp(12),
      justifyContent: "center"
    }
  })
}