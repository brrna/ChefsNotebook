import { Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'
import { MealContext } from '../../context/MealContext/MealContext'
import { FontContext } from '../../context/FontContext/FontContext'
import useFetchMeals from '../../hooks/useFetchMeals'
import { MEAL_URL } from '@env'

const MealPart = () => {

  let { color } = useContext(ColorContext)
  let { selectedCategory } = useContext(MealContext)
  let { fonts } = useContext(FontContext)

  const styles = createStyles(color, fonts)

  const { data } = useFetchMeals(`${MEAL_URL}${selectedCategory?.strCategory}`)

  return (
    <View style={styles.container} >
      {selectedCategory ? (
        <View>
          <View style={styles.headerView} >
            <Text style={styles.headerText} >{selectedCategory.strCategory}</Text>
          </View>
          <View style={styles.mealView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.idMeal}
              renderItem={({ item }) => (
                <Text style={styles.mealText}>{item.strMeal}</Text>
              )}
            />
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