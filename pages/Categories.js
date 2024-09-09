import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native'
import React from 'react'
import MyHeader from '../components/myHeader/MyHeader'
import useFetchCategories from '../hooks/useFetchCategories'
import Loading from "../components/loading/Loading"
import Error from '../components/error/Error'
import { BASE_URL } from "@env"
import MyFlatlist from '../components/myFlatlist/MyFlatlist'
import MealPart from '../components/mealPart/MealPart'
import { animations } from '../components/loading/Animations'
import { useSelector } from 'react-redux'

const Categories = () => {

  const color = useSelector((state) => state.color)

  const styles = createStyles(color)
  const { loading, error } = useFetchCategories(`${BASE_URL}`);

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
      <MyHeader header={"Chef's Notebook"} textColor={color.green} />
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