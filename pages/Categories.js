import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import MyHeader from '../components/myHeader/MyHeader'
import useFetchCategories from '../hooks/useFetchCategories'
import Loading from "../components/loading/Loading"
import Error from '../components/error/Error'
import MealOption from '../components/mealOption/MealOption'
import { CATEGORY_URL } from "@env"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyFlatlist from '../components/myFlatlist/MyFlatlist'

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
    </SafeAreaView>
  )
}

export default Categories

const createStyles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.green,
      alignItems: "center"
    },
    flatlist: {
      backgroundColor: "blue"
    }
  })
}