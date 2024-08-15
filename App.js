import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { MealContextProvider } from './context/MealContext/MealContext';
import { useEffect, useState } from 'react';
import Splash from "./pages/Splash"
import { Provider } from 'react-redux';
import store from './redux/store';
import { useFontsLoaded } from './hooks/useFontsLoaded';

const FontLoader = ({ children }) => {
  const fontsLoaded = useFontsLoaded()

  if(!fontsLoaded) {
    return null
  }

  return children;
};

export default function App() {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  }, [])

  return (
    <Provider store={store} >
      <FontLoader>
      <MealContextProvider>
        <NavigationContainer>
          {splash ? <Splash /> : <Router />}
        </NavigationContainer>
      </MealContextProvider>
      </FontLoader>
    </Provider>
  );
}