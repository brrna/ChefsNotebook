import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'

const MealPart = () => {

    let {color} = useContext(ColorContext)

    const styles = createStyles(color)

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text>Meals</Text>
      </View>
    </View>
  )
}

export default MealPart

const styles = StyleSheet.create({})