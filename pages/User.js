import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

    const color = useSelector((state) => state.color)
    const styles = createStyles(color)

  return (
    <SafeAreaView style={styles.container} >
        <Text>kullanıcı sözleşmesi gelecek </Text>
    </SafeAreaView>
  )
}

export default User

const createStyles = (color) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color.white,
            alignItems: "center",
            justifyContent: "center"
        }
    })
    
}