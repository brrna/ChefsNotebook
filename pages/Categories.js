import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import MyHeader from '../components/myHeader/MyHeader'
import useFetchCategories from '../hooks/useFetchCategories'
import Loading from "../components/loading/Loading"
import Error from '../components/error/Error'
import { CATEGORY_URL } from "@env"
import MyFlatlist from '../components/myFlatlist/MyFlatlist'
import MealCard from '../components/mealCard/MealCard'
import MealPart from '../components/mealPart/MealPart'

const Categories = () => {

  let { color } = useContext(ColorContext)

  const styles = createStyles(color)
  const { loading, error } = useFetchCategories(CATEGORY_URL);


  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <Error />
    )
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar />
      <MyHeader />
      <MyFlatlist />
      <MealPart />
    </SafeAreaView>
  )
}

export default Categories

const createStyles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.cream,
      alignItems: "center"
    },
    flatlist: {
      backgroundColor: "blue"
    }
  })
}