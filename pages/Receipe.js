import { FlatList, SafeAreaView, StyleSheet, Text, Modal, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import useFetchMeals from '../hooks/useFetchMeals';
import { RECEIPE_URL } from "@env"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SelectedReceipe from '../components/selectedReceipe/SelectedReceipe';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Receipe = ({ route }) => {

  const color = useSelector((state) => state.color )

  const { id } = route.params;
  const { data, loading, error } = useFetchMeals(`${RECEIPE_URL}${id}`);
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(true);

  const styles = createStyles(color)

  if (loading) {
    return loading
  }

  if (error) {
    return error
  }

  const meal = data[0];

  const renderMeal = ({ item }) => {
    return <SelectedReceipe meal={item} />
  }

  const mealExtractor = (item, index) => index.toString();

  return (
    <SafeAreaView style={styles.container} >
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          navigation.navigate("CategoriesScreen")
        }}>
        {
          meal ? (
            <View style={styles.container} >
              <FlatList
                data={[meal]}
                renderItem={renderMeal}
                keyExtractor={mealExtractor} />
            </View>
          ) : (
            <Text></Text>
          )
        }
      </Modal>

    </SafeAreaView>
  )
}

export default Receipe

const createStyles = (color) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.cream
    },
    image: {
      width: wp(100),
      height: hp(35)
    }
  })
}