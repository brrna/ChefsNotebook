import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'
import { MealContext } from '../../context/MealContext/MealContext'

const MealPart = () => {

  let { color } = useContext(ColorContext)
  let {selectedCategory} = useContext(MealContext)
  const styles = createStyles(color)

  return (
    <View style={styles.container} >
      {selectedCategory ? (
        <View style={styles.mealView}>
          <Text>{selectedCategory.strCategory}</Text>
          {/* Add more details as needed */}
        </View>
      ) : (
        <Text>No meal selected</Text>
      )}
    </View>
  )
}

export default MealPart