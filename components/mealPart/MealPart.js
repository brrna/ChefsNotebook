import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'

const MealPart = ({ option }) => {

  let { color } = useContext(ColorContext)

  const styles = createStyles(color)

  return (
    <View style={styles.container} >
      <View style={styles.mealView} >
      </View>
    </View>
  )
}

export default MealPart