import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Header from "./src/components/Header"
import { colors } from './src/constants/colors';
import ItemListCategory from './src/screens/ItemListCategory';
import { useState } from 'react';


const App = () => {

  const [categorySelected, setCategorySelected] = useState("")

  return (
    <View style={styles.container}>
        <Header title={"PEQUEÑA ALPACA"}/>
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
    backgroundColor: colors.lilac200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;