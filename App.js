import { Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { colors } from './src/constants/colors';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store/index'

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Sacramento': require('./assets/Sacramento-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if(fontsLoaded && !fontError){
  return (
    <SafeAreaView style={styles.container}>
      <Provider  store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    flex: 1,
    backgroundColor: colors.lilac600,
    justifyContent: 'flex-start',
  },
  
});

export default App;