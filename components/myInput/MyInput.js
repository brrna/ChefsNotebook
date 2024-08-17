import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import createStyles from './MyInputStyle'
import { useSelector } from 'react-redux'

const MyInput = ({placeholder, onPress}) => {

    const color = useSelector((state) => state.color);
    const fonts = useSelector((state) => state.fonts.fonts)

    const styles = createStyles(color, fonts)

  return (
    <View style={styles.container} >
      <View style={styles.inputView} >
        <TextInput 
            onPress={onPress}
            style={styles.inputText}
            placeholder={placeholder}
            placeholderTextColor={color.cream} />
      </View>
    </View>
  )
}

export default MyInput