import { Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import createdStyle from './DailyCardStyle'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import { FontContext } from '../../context/FontContext/FontContext'

const DailyCard = ({ image, name }) => {

  let {color} = useContext(ColorContext);
  let {fonts} = useContext(FontContext);

  const styles = createdStyle(color, fonts)

  return (
    <View style={styles.container} >
      <Image
        source={{ uri: image }}
        style={styles.img} />
      <View style={styles.textView} >
        <Text style={styles.text} >{name}</Text>
      </View>
    </View>
  )
}

export default DailyCard