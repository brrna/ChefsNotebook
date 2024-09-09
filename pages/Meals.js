import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import useFetchMeals from '../hooks/useFetchMeals'
import { RANDOM_MEAL } from "@env"
import Loading from "../components/loading/Loading"
import Error from "../components/error/Error"
import NoData from '../components/noData/NoData'
import { animations } from '../components/loading/Animations'
import DailyCard from '../components/dailyCard/DailyCard'
import MyHeader from '../components/myHeader/MyHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import useFetchMealOfTheDay from '../hooks/useFetchMealOfTheDay'
import { useSelector } from 'react-redux'

const Meals = () => {

  const color = useSelector((state) => state.color)
  const { data, loading, error } = useFetchMeals(`${RANDOM_MEAL}`);
  const meal = useFetchMealOfTheDay(data);
  const styles = createdStyle(color);

  if(loading){
    return <Loading src={animations.food} />
  }

  if(error) {
    return <Error />
  }

  if (!data || data.length === 0) {
    return <NoData />
  }

  return (
    <SafeAreaView style={styles.container} >
      <MyHeader 
        header={"Meal of the Day"}
        textColor={color.navyBlue} />
      <View style={styles.content} >
      <DailyCard
        meal={meal}
        image={meal?.strMealThumb}
        name={meal?.strMeal} />
      </View>
    </SafeAreaView>

  )
}

export default Meals

const createdStyle = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: color.white,
    },
    content: {
      height: hp(79.5),
      width: wp(100),
      justifyContent: "center",
      alignItems: "center"
    },
  })
}