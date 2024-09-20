import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import MyButton from "../components/MyButton/myButton"
import { db } from '../firebaseConfig'

const Notebook = () => {

  const [data, setData] = useState([]);
  console.log("data: ", data)

  const sendData = async() => {
    try {
      const docRef = await addDoc(collection(db, "ReactNativeLesson"), {
        title: "zero to hero",
        content: "react native",
        lesson: 17
      });
      console.log("document written with ID: ", docRef.id);
    } catch (e) {
      console.log("error adding document: ", e)
    }
  }

  const getData = async() => {
    const querySnapshot = await getDocs(collection(db, "ReactNativeLesson"));
    querySnapshot.forEach((doc) => {
      setData(doc.data())
      console.log("clicked")
    })
  }

  return (
    <SafeAreaView style={styles.container} >
        <MyButton 
          text="post"
          buttonText="kaydet"
          onPress={sendData} />

        <MyButton 
          text="get"
          buttonText="getir"
          onPress={getData} />  
    </SafeAreaView>
  )
}

export default Notebook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center"
    }
})