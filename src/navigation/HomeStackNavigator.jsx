import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Header from '../components/Header'
import ItemDetail from '../screens/ItemDetail'
import ItemListCategory from '../screens/ItemListCategory'

const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{}} >
    <Stack.Screen  
        component={Home} 
        name='Home'
        options={{title:'Categorias'}}
 />
    <Stack.Screen 
      component={ItemListCategory}
      name='ItemListCategory'
      options={{title:'Productos'}}
      />
      <Stack.Screen 
      component={ItemDetail}
      options={{title:'Detalle'}}
      name='ItemDetail'
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})