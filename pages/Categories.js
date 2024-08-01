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

const Categories = () => {

  let { color, selectedColor } = useContext(ColorContext)

  const styles = createStyles(color, selectedColor)
  const { loading, data, error } = useFetchCategories(CATEGORY_URL);

  const images = [
    require("../assets/icons/beef.png"),
    require("../assets/icons/chicken.png"),
    require("../assets/icons/dessert.png"),
    require("../assets/icons/lamb.png"),
    require("../assets/icons/misell.png"),
    require("../assets/icons/pasta.png"),
    require("../assets/icons/pork.png"),
    require("../assets/icons/seafood.png"),
    require("../assets/icons/side.png"),
    require("../assets/icons/starter.png"),
    require("../assets/icons/vegan.png"),
    require("../assets/icons/vegetarien.png"),
    require("../assets/icons/breakfast.png"),
    require("../assets/icons/goat.png")
  ]

  //strCategory
  const renderMeals = ({ item, index }) => (<MealOption option={item.strCategory} img={images[index % images.length]} />)
  const keyMeals = (item, index) => index.toString()

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
      <FlatList
        horizontal
        data={data}
        renderItem={renderMeals}
        keyExtractor={keyMeals} />
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