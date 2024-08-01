import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { ColorContextProvider } from './context/ThemeContext/ColorContext';
import { FontContextProvider } from './context/FontContext/FontContext';
import { MealContextProvider } from './context/MealContext/MealContext';

export default function App() {
  return (
    <NavigationContainer>
      <ColorContextProvider>
        <FontContextProvider>
          <MealContextProvider>
            <Router />
          </MealContextProvider>
        </FontContextProvider>
      </ColorContextProvider>
    </NavigationContainer>
  );
}