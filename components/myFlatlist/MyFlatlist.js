import { FlatList, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyle from './MyFlatlistStyle';
import useFetchCategories from '../../hooks/useFetchCategories';
import { CATEGORY_URL } from "@env"
import MealOption from '../mealOption/MealOption';
import { icons } from './Icons';
import { MealContext } from '../../context/MealContext/MealContext';

const MyFlatlist = () => {

  let { color } = useContext(ColorContext);
  const { setSelectedCategory } = useContext(MealContext)
  const styles = createStyle(color);

  const handlePress = (meal) => {
    setSelectedCategory(meal)
  };

  const { data } = useFetchCategories(CATEGORY_URL)
  const renderMeals = ({ item, index }) => (
    <MealOption
      option={item.strCategory}
      img={icons[index % icons.length]}
      onPress={() => handlePress(item)} />
  )
  const keyMeals = (item, index) => index.toString()

  return (
    <View style={styles.container} >
      <FlatList
        horizontal
        data={data}
        renderItem={renderMeals}
        keyExtractor={keyMeals}
        showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default MyFlatlist