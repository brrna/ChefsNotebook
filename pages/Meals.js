import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import useFetchMeals from '../hooks/useFetchMeals'
import { RANDOM_MEAL } from "@env"
import Loading from "../components/loading/Loading"
import Error from "../components/error/Error"
import NoData from '../components/noData/NoData'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import { animations } from '../components/loading/Animations'
import DailyCard from '../components/dailyCard/DailyCard'
import MyHeader from '../components/myHeader/MyHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Meals = () => {

  let {color} = useContext(ColorContext)
  const { data, loading, error } = useFetchMeals(`${RANDOM_MEAL}`);

  const [meal, setMeal] = useState(null)

  const styles = createdStyle(color)

  useEffect(() => {
    const fetchMealOfTheDay = async () => {
      // Günün tarihini al
      const today = new Date().toISOString().split('T')[0];
      
      // AsyncStorage'dan yemeği ve tarihi al
      const storedMeal = await AsyncStorage.getItem('mealOfTheDay');
      const storedDate = await AsyncStorage.getItem('mealDate');

      if (storedMeal && storedDate === today) {
        // Eğer saklanan tarih bugünkü tarih ise, saklanan yemeği kullan
        setMeal(JSON.parse(storedMeal));
      } else {
        // Yeni yemek çek ve AsyncStorage'a kaydet
        if (data && data.length > 0) {
          const fetchedMeal = data[0];
          setMeal(fetchedMeal);
          await AsyncStorage.setItem('mealOfTheDay', JSON.stringify(fetchedMeal));
          await AsyncStorage.setItem('mealDate', today);
        }
      }
    };

    fetchMealOfTheDay();
  }, []);


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
        image={meal.strMealThumb}
        name={meal.strMeal} />
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