import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../Categories';
import Receipe from '../Receipe';
import Meals from "../Meals"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ColorContext } from '../../context/ThemeContext/ColorContext';
import { color } from '../../context/ThemeContext/Colors';

const Router = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='CategoriesScreen' component={Categories} />
        <Stack.Screen name='ReceipeScreen' component={Receipe} />
      </Stack.Navigator>
    )
  }

  function MealStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='MealsScreen' component={Meals} />
      </Stack.Navigator>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: hp(10),
          backgroundColor: color.green
        }
      }) } >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Meal' component={MealStack} />
    </Tab.Navigator>
  )
}

export default Router