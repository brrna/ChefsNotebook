import { FlatList, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyle from './MyFlatlistStyle';
import useFetchCategories from '../../hooks/useFetchCategories';
import {CATEGORY_URL} from "@env"
import MealOption from '../mealOption/MealOption';
import { icons } from './Icons';

const MyFlatlist = () => {

    let {color} = useContext(ColorContext);

    const styles = createStyle(color)

    const {data} = useFetchCategories(CATEGORY_URL)

    const renderMeals = ({ item, index }) => (<MealOption option={item.strCategory} img={icons[index % icons.length]} />)
    const keyMeals = (item, index) => index.toString()

  return (
    <View style={styles.container} >
      <FlatList 
        horizontal
        data={data}
        renderItem={renderMeals}
        keyExtractor={keyMeals}/>
    </View>
  )
}

export default MyFlatlist

const styles = StyleSheet.create({})