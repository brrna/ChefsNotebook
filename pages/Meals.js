import { SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import useFetchMeals from '../hooks/useFetchMeals'
import { RANDOM_MEAL } from "@env"
import Loading from "../components/loading/Loading"
import Error from "../components/error/Error"
import NoData from '../components/noData/NoData'

const Meals = () => {

  const { data, loading, error } = useFetchMeals(`${RANDOM_MEAL}`);

  if(loading){
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  if (!data || data.length === 0) {
    return <NoData />
  }

  const meal = data[0];

  return (
    <SafeAreaView>
      <Text>dgcdhdh</Text>
      <Text>{meal.strMeal}</Text>
    </SafeAreaView>

  )
}

export default Meals

const styles = StyleSheet.create({})