import { Pressable, Text, View } from 'react-native'
import React from 'react'
import createStyles from './myButtonStyle'
import { useSelector } from 'react-redux'

const MyButton = ({text, buttonText, onPress}) => {

    const color = useSelector((state) => state.color)
    const fonts = useSelector((state) => state.fonts.fonts)

    const styles = createStyles(color, fonts)

  return (
    <View style={styles.container} >
        <Text style={styles.text} >{text}</Text>
      <Pressable 
        onPress={onPress}
        style={styles.button} >
        <Text style={styles.buttonText} >{buttonText}</Text>
      </Pressable>
    </View>
  )
}

export default MyButton