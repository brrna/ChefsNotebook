import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../Categories';
import Receipe from '../Receipe';
import Meals from "../Meals"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Profile from '../Profile';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Router = () => {

  const color = useSelector((state) => state.color)

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

  function ProfileStack() {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='ProfileScreen' component={Profile} />
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'menu' : 'menu-outline';
            return <Ionicons name={iconName} size={size} color={color}  /> 
          } else if (route.name === 'Meal') {
            iconName = focused ? 'food-takeout-box' : 'food-takeout-box-outline'
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle' : 'user-o'
            return <FontAwesome name={iconName} size={size} color={color} /> 
          }
          
        }
      })} >
      <Tab.Screen 
        name='Home' 
        component={HomeStack}
        options={{
          tabBarStyle: {
            backgroundColor: color.green,
            height: hp(9.5) }
        }} />
      <Tab.Screen 
        name='Meal' 
        component={MealStack}
        options={{
          tabBarStyle: {
            backgroundColor: color.navyBlue,
            height:hp(9.5) }
        }} />
        <Tab.Screen 
        name='Profile' 
        component={ProfileStack}
        options={{
          tabBarStyle: {
            backgroundColor: color.darkGreen,
            height:hp(9.5) }
        }} />
    </Tab.Navigator>
  )
}

export default Router