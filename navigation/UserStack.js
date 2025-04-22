import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Categories from "../pages/Categories"
import Receipe from "../pages/Receipe"
import Meals from "../pages/Meals" 
import { useSelector } from 'react-redux'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import User from "../pages/User"

const UserStack = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const color = useSelector((state) => state.color)

    function HomeStack() {
        return(
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name='CategoriesScreen' component={Categories} />
                <Stack.Screen name='ReceipeScreen' component={Receipe} />
            </Stack.Navigator>
        )
    }

    function MealStack() {
        return(
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name='MealsScreen' component={Meals} />
            </Stack.Navigator>
        )
    }

    function UserStack() {
      return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name='UserScreen' component={User} />
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
          } else if (route.name === 'User') {
            iconName = focused ? 'handshake' : 'handshake-outline'
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          }
          
        }
      })} >
      <Tab.Screen 
        name='Home' 
        component={HomeStack}
        options={{
          tabBarStyle: {
            backgroundColor: color.navyBlue,
            height: hp(9.5),
            borderTopWidth: 0
             }
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
         name='User'
         component={UserStack} />
    </Tab.Navigator>
  )
}

export default UserStack