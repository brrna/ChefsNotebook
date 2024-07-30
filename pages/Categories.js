import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import MyHeader from '../components/myHeader/MyHeader'

const Categories = () => {

  let { color } = useContext(ColorContext)

  const styles = createStyles(color)

  return (
    <SafeAreaView style={styles.container} >
      <MyHeader />
    </SafeAreaView>
  )
}

export default Categories

const createStyles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.green,
      justifyContent: "center",
      alignItems: "center"
    }
  })
}