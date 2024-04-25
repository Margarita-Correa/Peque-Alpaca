import { Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import Header from "./src/components/Header"
import { colors } from './src/constants/colors';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';
import { useState } from 'react';
import { useFonts } from 'expo-font';

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Sacramento': require('./assets/Sacramento-Regular.ttf'),
  });
  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")


  if (!fontsLoaded && !fontError) {
    return null;
  }

  if(fontsLoaded && !fontError){
  return (
    <SafeAreaView style={styles.container} >
    <Header title={"Pequeña Alpaca"}/>
        {!categorySelected ? (
        <Home setCategorySelected = {setCategorySelected} />
        ):
          !itemIdSelected ?
            <ItemListCategory
                categorySelected = {categorySelected}
                setCategorySelected={setCategorySelected}
                setItemIdSelected={setItemIdSelected} 
            /> 
            : 
            <ItemDetail
                idSelected={itemIdSelected}
                setProductSelected={setItemIdSelected}
            />
        }
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    flex: 1,
    backgroundColor: colors.lilac600,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
});

export default App;