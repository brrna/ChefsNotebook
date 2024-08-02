import { Text, View, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'
import { MealContext } from '../../context/MealContext/MealContext'
import { FontContext } from '../../context/FontContext/FontContext'
import axios from 'axios'

const MealPart = () => {

  let { color } = useContext(ColorContext)
  let { selectedCategory } = useContext(MealContext)
  let { fonts } = useContext(FontContext)
  const styles = createStyles(color, fonts)

  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async() => {
      if(selectedCategory) {
        try{
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`)
          setMeals(response.data.meals)
        } catch (error) {
          console.error("error", error)
        }
      }
    }
    fetchMeals()
  }, [selectedCategory])

  return (
    <View style={styles.container} >
      {selectedCategory ? (
        <View>
          <View style={styles.headerView} >
            <Text style={styles.headerText} >{selectedCategory.strCategory}</Text>
          </View>
          <View style={styles.mealView}>
          <FlatList
              data={meals}
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