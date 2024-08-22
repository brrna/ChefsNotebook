import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'

const Notebook = () => {
  return (
    <SafeAreaView style={styles.container} >
        <Text>Notebook</Text>
    </SafeAreaView>
  )
}

export default Notebook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    }
})