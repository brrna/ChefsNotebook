import { Provider } from 'react-redux';
import store from './redux/store';
import { useFontsLoaded } from './hooks/useFontsLoaded';
import RootNavigation from './navigation/RootNavigation';

export default function App() {

  return (
    <Provider store={store} >
      <FontLoader>
        <RootNavigation />
      </FontLoader>
    </Provider>
  );
}

const FontLoader = ({ children }) => {
  const fontsLoaded = useFontsLoaded()

  if (!fontsLoaded) {
    return null
  }

  return children;
};