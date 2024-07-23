import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Splash';
import Categories from '../Categories';
import Meals from '../Meals';
import Receipe from '../Receipe';

const Router = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator >
        <Stack.Screen name='SplashScreen' component={Splash} />
        <Stack.Screen name='CategoriesScreen' component={Categories} />
        <Stack.Screen name='MealsScreen' component={Meals} />
        <Stack.Screen name='ReceipeScreen' component={Receipe} />
    </Stack.Navigator>
  )
}

export default Router