import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import useFetchMeals from '../hooks/useFetchMeals'
import { RANDOM_MEAL } from "@env"
import Loading from "../components/loading/Loading"
import Error from "../components/error/Error"
import NoData from '../components/noData/NoData'
import LottieView from 'lottie-react-native'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Meals = () => {

  let {color} = useContext(ColorContext)

  const { data, loading, error } = useFetchMeals(`${RANDOM_MEAL}`);

  const styles = createdStyle(color)

  if(loading){
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  if (!data || data.length === 0) {
    return <NoData />
  }

  const meal = data[0];

  return (
    <SafeAreaView style={styles.container} >
      <LottieView 
        source={require("../assets/animations/food.json")} 
        autoPlay 
        loop
        style={styles.lottie} />
    </SafeAreaView>

  )
}

export default Meals

const createdStyle = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color.cream
    },
    lottie: {
      width: wp(80),
      height: hp(40)
    },
  })
}