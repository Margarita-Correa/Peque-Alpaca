import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../data/orders.json'
import OrderItem from '../components/OrderItem'
import { colors } from '../constants/colors'

const OrderScreen = () => {
  return (
    <View style={styles.orderContainer}>
      <FlatList 
        data={OrderData}
        keyExtractor={orderItem=> orderItem.id}
        renderItem={({item})=>{
          return (
            <OrderItem order={item} />
          )
        }}
      />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  orderContainer:{
    flex:1,
    backgroundColor:colors.lilac600
  }
})