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
    initialRouteName='Pequeña Alpaca'
    screenOptions={{}} >
    <Stack.Screen  
        component={Home} 
        name='Home' />
    <Stack.Screen 
      component={ItemListCategory}
      name='ItemListCategory'ssssss
      />
      <Stack.Screen 
      component={ItemDetail}
      name='ItemDetail'
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})