import { SafeAreaView, Text } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import createdStyle from './NoDataStyle';

const NoData = () => {

    let {color} = useContext(ColorContext);
    
    const styles = createdStyle(color)

  return (
    <SafeAreaView style={styles.container} >
        <Text style={styles.text} >no data avaliable</Text>
    </SafeAreaView>
  )
}

export default NoData