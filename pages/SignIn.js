import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyInput from '../components/myInput/MyInput';
import MyButton from '../components/MyButton/myButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loading from '../components/loading/Loading';
import { animations } from '../components/loading/Animations';
import { login } from '../redux/user/userSlice';

const SignIn = () => {

  const color = useSelector((state) => state.color);
  const fonts = useSelector((state) => state.fonts.fonts);
  const loading= useSelector((state) => state.user)

  const styles = createStyles(color, fonts);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pressSignUp = () => {
    navigation.navigate("SignUp")
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.content} >
      <View style={styles.container} >
        <View style={styles.imageView} >
          <Image
            source={require("../assets/images/logo.jpeg")}
            style={styles.image} />
          <Text style={styles.text} >welcome to chef's notebook</Text>
        </View>
        <MyInput
          placeholder={"enter your name"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          inputMode="email"
          keyboardType="email-address"
        />
        <MyInput
          placeholder={"enter your password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true} />
        <MyButton
          buttonText={"sign in"}
          onPress={() => dispatch(login({ email, password }))} />
        <MyButton
          text={"or"}
          buttonText={"sign up"}
          onPress={pressSignUp} />
        {
          !loading ?
            <Loading
              src={animations.food} />
            :
            null
        }
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn

const createStyles = (color, fonts) => {
  return StyleSheet.create({
    content: {
      flexGrow: 1,
      justifyContent: "center"
    },
    container: {
      flex: 1,
      backgroundColor: color.green,
      alignItems: "center"
    },
    imageView: {
      width: wp(100),
      height: hp(50),
      justifyContent: "center",
      alignItems: "center"
    },
    image: {
      height: hp(30),
      resizeMode: "center"
    },
    text: {
      fontFamily: fonts.handwrite,
      fontSize: hp(4),
      color: color.cream
    }
  })
}