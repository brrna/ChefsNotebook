import { Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './MealPartStyle'
import { MealContext } from '../../context/MealContext/MealContext'
import { FontContext } from '../../context/FontContext/FontContext'
import useFetchMeals from '../../hooks/useFetchMeals'
import { MEAL_URL } from '@env'
import FoodChoice from '../foodChoice/FoodChoice'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const MealPart = () => {

  const color = useSelector((state) => state.color)
  let { selectedCategory } = useContext(MealContext);
  let { fonts } = useContext(FontContext);

  const styles = createStyles(color, fonts);
  const { data } = useFetchMeals(`${MEAL_URL}${selectedCategory?.strCategory}`);
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate('ReceipeScreen', {id})
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
          </View>
          <View style={styles.mealView}>
            <FlatList
              horizontal
              data={data}
              keyExtractor={keyFood}
              renderItem={renderFood}
              showsHorizontalScrollIndicator={false}
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