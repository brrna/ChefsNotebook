import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../Categories';
import Receipe from '../Receipe';
import Meals from "../Meals"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ColorContext } from '../../context/ThemeContext/ColorContext';

const Router = () => {

  let {color} = useContext(ColorContext)

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='CategoriesScreen' component={Categories} />
        <Stack.Screen name='ReceipeScreen' component={Receipe} />
      </Stack.Navigator>
    )
  }

  function MealStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='MealsScreen' component={Meals} />
      </Stack.Navigator>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: color.cream,
        tabBarInactiveTintColor: color.cream,
        tabBarStyle: {
          height: hp(10),
          backgroundColor: color.green
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'menu' : 'menu-outline';
            return <Ionicons name={iconName} size={size} color={color}  /> 
          } else if (route.name === 'Meal') {
            iconName = focused ? 'food-takeout-box' : 'food-takeout-box-outline'
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          }
          
        }
      })} >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Meal' component={MealStack} />
    </Tab.Navigator>
  )
}

export default Router