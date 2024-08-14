import { Text, View, Image, Pressable, SafeAreaView, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import createdStyle from './DailyCardStyle'
import { FontContext } from '../../context/FontContext/FontContext'
import DayModal from '../dayModal/DayModal'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const DailyCard = ({ image, name, meal }) => {

  const color = useSelector((state) => state.color)
  let { fonts } = useContext(FontContext);

  const styles = createdStyle(color, fonts);
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView>
      <Modal
        animationType='slide' 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
          navigation.navigate("MealsScreen")
        }} >
          <DayModal src={image} meal={meal} />
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.container} >
        <Image
          source={{ uri: image }}
          style={styles.img} />
        <View style={styles.textView} >
          <Text style={styles.text} >{name}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  )
}

export default DailyCard