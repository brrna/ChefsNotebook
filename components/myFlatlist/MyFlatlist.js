import { FlatList, View } from 'react-native'
import React from 'react'
import createStyle from './MyFlatlistStyle';
import useFetchCategories from '../../hooks/useFetchCategories';
import { CATEGORY_URL } from "@env"
import MealOption from '../mealOption/MealOption';
import { icons } from './Icons';
import { useDispatch, useSelector } from 'react-redux';
import {setSelectedCategory} from "../../redux/meal/mealSlice"

const MyFlatlist = () => {

  const color = useSelector((state) => state.color)
  const styles = createStyle(color);
  const dispatch = useDispatch();

  const handlePress = (meal) => {
    dispatch(setSelectedCategory(meal))
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