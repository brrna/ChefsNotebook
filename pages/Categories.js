import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import MyHeader from '../components/myHeader/MyHeader'
import useFetchCategories from '../hooks/useFetchCategories'
import Loading from "../components/loading/Loading"
import Error from '../components/error/Error'
import { CATEGORY_URL } from "@env"
import MyFlatlist from '../components/myFlatlist/MyFlatlist'
import MealPart from '../components/mealPart/MealPart'
import { animations } from '../components/loading/Animations'

const Categories = () => {

  let { color } = useContext(ColorContext)

  const styles = createStyles(color)
  const { loading, error } = useFetchCategories(CATEGORY_URL);


  if (loading) {
    return (
      <Loading src={animations.select} />
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
    }
  })
}