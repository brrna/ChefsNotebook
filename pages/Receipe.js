import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useContext } from 'react'
import useFetchMeals from '../hooks/useFetchMeals';
import { RECEIPE_URL } from "@env"
import { ColorContext } from '../context/ThemeContext/ColorContext';

const Receipe = ({ route }) => {

  let {color} = useContext(ColorContext)

  const { id } = route.params;
  const { data, loading, error } = useFetchMeals(`${RECEIPE_URL}${id}`)
  console.log(id)

  const styles = createStyles(color)

  if (loading) {
    return loading
}

if (error) {
    return error
}

  return (
    <SafeAreaView style={styles.container} >
      <Text>{data[0].strMeal}</Text>
    </SafeAreaView>
  )
}

export default Receipe

const createStyles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.cream
    }
  })
}