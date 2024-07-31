import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import MyHeader from '../components/myHeader/MyHeader'
import useFetchCategories from '../hooks/useFetchCategories'
import Loading from "../components/loading/Loading"
import Error from '../components/error/Error'

const Categories = () => {

  let { color } = useContext(ColorContext)

  const styles = createStyles(color)
  const {loading, data, error} = useFetchCategories("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
                                                     

  //strCategory
  const renderMeals = ({item}) => <Text>{item.strCategory}</Text>
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
    }
  })
}