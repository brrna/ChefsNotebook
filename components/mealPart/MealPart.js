import { Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyles from './MealPartStyle'
import { MealContext } from '../../context/MealContext/MealContext'
import { FontContext } from '../../context/FontContext/FontContext'
import useFetchMeals from '../../hooks/useFetchMeals'
import { MEAL_URL } from '@env'
import FoodChoice from '../foodChoice/FoodChoice'
import { useNavigation } from '@react-navigation/native'

const MealPart = () => {

  let { color } = useContext(ColorContext);
  let { selectedCategory } = useContext(MealContext);
  let { fonts } = useContext(FontContext);

  const styles = createStyles(color, fonts);
  const { data } = useFetchMeals(`${MEAL_URL}${selectedCategory?.strCategory}`);
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate('ReceipeScreen', {id})
    console.log("id",id)
  }

  const keyFood = (item) => item.idMeal

  const renderFood = ({ item }) => (
    <FoodChoice 
      onPress={() => handlePress(item.idMeal)}
      img={item.strMealThumb}
      foodname={item.strMeal} />
  )

  return (
    <View style={styles.container} >
      {selectedCategory ? (
        <View>
          <View style={styles.headerView} >
            <Text style={styles.headerText} >{selectedCategory.strCategory}</Text>
          </View>
          <View style={styles.mealView}>
            <FlatList
              horizontal
              data={data}
              keyExtractor={keyFood}
              renderItem={renderFood}
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