import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../data/cart.json'
import CartItem from '../components/CartItem'
import { colors } from '../constants/colors'

const Cart = () => {
    const total = CartData.reduce((acumulador, currentItem)=> 
        acumulador += currentItem.price * currentItem.quantity, 0)
 
    return (
    <View style={styles.container}>
    <FlatList
        data={CartData}
        keyExtractor={cartItem => cartItem.id}
        renderItem={({item})=> {
            return (
                <CartItem cartItem={item} />
            )
        }}
    />
    <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${total}</Text>
        <Pressable style={styles.confirm}>
            <Text style={styles.confirmText}>Confirmar Compra</Text>
        </Pressable>

    </View>
</View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor:colors.lilac400,
    },
    totalContainer: {
        flexDirection: 'column',
        backgroundColor: colors.lilac400,
        alignItems: "center",
    },
    total:{
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: colors.ligth000,
        width: "90%",
        justifyContent: "center",
        fontWeight:'bold',
    },
    confirm:{
        padding: 10,
        margin: 10,
        backgroundColor: colors.lilac900,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
    },
    confirmText:{color: colors.ligth000 }
})