import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { colors } from '../constants/colors';

const OrderItem = ({order}) => {
    const total = order.items.reduce((acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity), 0);

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Orden n° {order.id}</Text>
                <Text style={styles.text2}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>Total: ${total}</Text>
            </View>
            <Feather name="search" size={30} color="black" />
        </View>
    );
};


export default OrderItem

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
        width: "80%",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 19,
        color: colors.black,
    },
    text2: {
        fontWeight: 'bold'
    },
})