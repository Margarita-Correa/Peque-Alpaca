import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import {  useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../features/Counter/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <Pressable style={styles.button} onPress={()=>dispatch(reset())}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lilac200,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.lilac200,
    },
    span: {
        backgroundColor: colors.lilac600,
        width: "40%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        color: colors.black
    },
    buttonText: {
        fontSize: 18,
    },
});
