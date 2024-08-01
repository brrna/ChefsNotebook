import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createStyle from './MealCardStyle';

const MealCard = () => {

    let {color} = useContext(ColorContext);

    const styles = createStyle(color)

  return (
    <View style={styles.container} >
      <Text>MealCard</Text>
    </View>
  )
}

export default MealCard