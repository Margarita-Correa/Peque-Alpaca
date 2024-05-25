import { StyleSheet, View} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator';
import Header from '../components/Header';
import { colors } from '../constants/colors';
import {FontAwesome5, FontAwesome6} from "@expo/vector-icons"
import { MaterialIcons } from '@expo/vector-icons';
import CartStack from './CartStackNavigator';
import OrderStack from './OrderStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
         screenOptions={ ({route}) =>({header:()=>{
        return  <Header route={route} />
      }, tabBarShowLabel: false,
         tabBarStyle: styles.tabBar,
    })} 
    >
        <Tab.Screen
            name="Pequeña Alpaca"
            component={HomeStackNavigator}
            options={{
                tabBarIcon:({focused})=>{
                    return (
                        <View>
                            <FontAwesome5 name="store" size={20} color={focused ? colors.lilac900 : "black"} />
                        </View>
                    )
                },
            }}
        />
        <Tab.Screen 
            name="Carrito"
            component={CartStack}
            options={{
                tabBarIcon:({focused})=>{
                    return (
                        <View>
                            <FontAwesome6 name="cart-shopping" size={20} color={focused ? colors.lilac900 : "black"}/>
                        </View>
                    )
                },
            }}
        />
        <Tab.Screen 
            name="Orders"
            component={OrderStack}
            options={{
                tabBarIcon:({focused})=>{
                    return (
                        <View>
                            <MaterialIcons name="receipt-long" size={24} color={focused ? colors.lilac900 : "black"}/>
                        </View>
                    )
                },
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.lilac200,
        shadowColor: "black",
        elevation: 4,
        height: 60,
    }
})