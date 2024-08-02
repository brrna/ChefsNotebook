import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'
import { MealContext } from '../../context/MealContext/MealContext'
import { FontContext } from '../../context/FontContext/FontContext'

const MealPart = () => {

  let { color } = useContext(ColorContext)
  let { selectedCategory } = useContext(MealContext)
  let { fonts } = useContext(FontContext)
  const styles = createStyles(color, fonts)

  return (
    <View style={styles.container} >
      {selectedCategory ? (
        <View>
          <View style={styles.headerView} >
            <Text style={styles.headerText} >{selectedCategory.strCategory}</Text>
          </View>
          <View style={styles.mealView}>
            {/* Add more details as needed */}
          </View>
        </View>
      ) : (
        <View style={styles.firstView} >
            <Text style={styles.text} >what dou you want to eat today?</Text>
        </View>
      )}
    </View>
  )
}

export default MealPart