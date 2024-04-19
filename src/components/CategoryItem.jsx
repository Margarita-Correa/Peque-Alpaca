import React from 'react'
import { Pressable, StyleSheet, Text } from "react-native"
import { colors } from "../constants/colors"
import Card from "./Card"

const CategoryItem = ({category, selectCategory=()=>{}}) => {
    return (
      <Card>
        <Pressable onPress={()=>selectCategory(category)}>
          <Text style={styles.text}>{category}</Text>
        </Pressable>
      </Card>
    )
  }
  
  export default CategoryItem
  
  const styles = StyleSheet.create({
      categoryContainer: {
          backgroundColor: colors.lilac600,
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
          color: colors.black,
          textAlign: 'center',
          fontSize: 20
      }
  })