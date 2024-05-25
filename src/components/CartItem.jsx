import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontisto } from "@expo/vector-icons";
import { colors } from "../constants/colors";


const CartItem = ({cartItem}) => {
  return (
    <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{cartItem.title}</Text>
            <Text style={styles.text2}>{cartItem.brand}</Text>
            <Text style={styles.text2}>Cantidad: {cartItem.quantity}</Text>
            <Text>Precio Unitario: ${cartItem.price}</Text>
        </View>
            <Fontisto name="trash" size={30} color="black" />
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        height: 100,
        padding: 10,
        margin: 10,
        backgroundColor: colors.lilac200,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 19,
        color: colors.lilac900,
    },
    text2: {
        color: colors.black,
    }
})