import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Header from "./src/components/Header"
import { colors } from './src/constants/colors';
import ItemListCategory from './src/screens/ItemListCategory';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Sacramento': require('./assets/Sacramento-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  const [categorySelected, setCategorySelected] = useState("")

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <Header title={"Pequeña Alpaca"}/>
        {!categorySelected ? (
        <Home setCategorySelected = {setCategorySelected} />
         ):( 
         <ItemListCategory 
          categorySelected = {categorySelected}
          setCategorySelected={setCategorySelected}/> 
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: colors.lilac400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;