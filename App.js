import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { ColorContextProvider } from './context/ThemeContext/ColorContext';
import { FontContextProvider } from './context/FontContext/FontContext';
import { MealContextProvider } from './context/MealContext/MealContext';
import { useEffect, useState } from 'react';
import Splash from "./pages/Splash"

export default function App() {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  })

  return (
    <NavigationContainer>
      <ColorContextProvider>
        <FontContextProvider>
          <MealContextProvider>
            {splash ? <Splash/> : <Router/>}
          </MealContextProvider>
        </FontContextProvider>
      </ColorContextProvider>
    </NavigationContainer>
  );
}