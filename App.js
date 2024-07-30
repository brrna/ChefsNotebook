import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { ColorContextProvider } from './context/ThemeContext/ColorContext';
import { FontContextProvider } from './context/FontContext/FontContext';

export default function App() {
  return (
    <NavigationContainer>
      <ColorContextProvider>
        <FontContextProvider>
          <Router />
        </FontContextProvider>
      </ColorContextProvider>
    </NavigationContainer>
  );
}