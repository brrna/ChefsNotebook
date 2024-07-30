import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { ColorContextProvider } from './context/ThemeContext/ColorContext';

export default function App() {
  return (
    <NavigationContainer>
      <ColorContextProvider>
        <Router />
      </ColorContextProvider>
    </NavigationContainer>
  );
}