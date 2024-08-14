import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { FontContextProvider } from './context/FontContext/FontContext';
import { MealContextProvider } from './context/MealContext/MealContext';
import { useEffect, useState } from 'react';
import Splash from "./pages/Splash"
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  }, [])

  return (
    <Provider store={store} >
      <FontContextProvider>
        <MealContextProvider>
          <NavigationContainer>
            {splash ? <Splash /> : <Router />}
          </NavigationContainer>
        </MealContextProvider>
      </FontContextProvider>
    </Provider>
  );
}