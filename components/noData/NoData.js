import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import createdStyle from './NoDataStyle';
import { useSelector } from 'react-redux';

const NoData = () => {

    const color = useSelector((state) => state.color)
    
    const styles = createdStyle(color)

  return (
    <SafeAreaView style={styles.container} >
        <Text style={styles.text} >no data avaliable</Text>
    </SafeAreaView>
  )
}

export default NoData