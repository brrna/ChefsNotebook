import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import createStyles from './MyInputStyle'
import { useSelector } from 'react-redux'

const MyInput = (props) => {

  const {value, onChangeText, placeholder, keyboardType, secureTextEntry, inputMode} = props;

    const color = useSelector((state) => state.color);
    const fonts = useSelector((state) => state.fonts.fonts)

    const styles = createStyles(color, fonts)

  return (
    <View style={styles.container} >
      <View style={styles.inputView} >
        <TextInput 
            value={value}
            onChangeText={onChangeText}
            style={styles.inputText}
            placeholder={placeholder}
            placeholderTextColor={color.cream}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            inputMode={inputMode} />
      </View>
    </View>
  )
}

export default MyInput