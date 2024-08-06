import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useContext } from 'react'
import useFetchMeals from '../hooks/useFetchMeals';
import { RECEIPE_URL } from "@env"
import { ColorContext } from '../context/ThemeContext/ColorContext';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SelectedReceipe from '../components/selectedReceipe/SelectedReceipe';

const Receipe = ({ route }) => {

  let { color } = useContext(ColorContext)

  const { id } = route.params;
  const { data, loading, error } = useFetchMeals(`${RECEIPE_URL}${id}`)

  const styles = createStyles(color)

  if (loading) {
    return loading
  }

  if (error) {
    return error
  }

  const meal = data[0];

  const renderMeal = ({item}) => {
    return <SelectedReceipe meal={item} />
  }

  const mealExtractor = (item, index) => index.toString();

  return (
    <SafeAreaView style={styles.container} >
      { 
        meal ? (
          <>
            <FlatList 
              data={[meal]}
              renderItem={renderMeal}
              keyExtractor={mealExtractor} />
          </>
        ) : (
          <Text></Text>
        )
      }
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