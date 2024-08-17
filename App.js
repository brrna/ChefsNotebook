import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { useEffect, useState } from 'react';
import Splash from "./pages/Splash"
import { Provider } from 'react-redux';
import store from './redux/store';
import { useFontsLoaded } from './hooks/useFontsLoaded';

export default function App() {

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 3000)
  }, [])

  return (
    <Provider store={store} >
      <FontLoader>
        <NavigationContainer>
          {splash ? <Splash /> : <Router />}
        </NavigationContainer>
      </FontLoader>
    </Provider>
  );
}

const FontLoader = ({ children }) => {
  const fontsLoaded = useFontsLoaded()

  if(!fontsLoaded) {
    return null
  }

  return children;
};