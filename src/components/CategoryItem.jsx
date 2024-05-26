import React from 'react'
import {Pressable, StyleSheet, Text } from "react-native"
import { colors } from "../constants/colors"
import Card from "./Card"
import { useDispatch } from 'react-redux'
import { setCategorySelected } from "../features/Shop/shopSlice"

const CategoryItem = ({category, navigation}) => {

  const dispatch = useDispatch()

  const handleNavigate = ()=>{
    dispatch(setCategorySelected(category))
    navigation.navigate('ItemListCategory',{category})
  }

    return (
      <Card>
        <Pressable onPress={handleNavigate}>
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      </Card>
    )
  }
  
  export default CategoryItem
  
  const styles = StyleSheet.create({
      categoryContainer: {
          backgroundColor: colors.lilac400,
          width: 250,
          height: 40,
          shadowColor: "#000",
          shadowOffset:{
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
      },
      text: {
          color: colors.lilac900,
          textAlign: 'center',
          fontSize: 20
      }
  })