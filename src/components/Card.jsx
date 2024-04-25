import React from 'react'
import { StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"

const Card = ({children,style}) => {
    return (
      <View style={{...styles.container, ...style}}>
          {children}
      </View>
    )
  }
  
  export default Card
  
  const styles = StyleSheet.create({
      container: {
          backgroundColor: colors.lilac200,
          width: 250,
          height: 40,
          shadowColor: "#000",
          shadowOffset:{
            width: 4,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.6,
          elevation: 6,
          marginBottom: 10,
          marginTop: 10,
          marginRight: 10,
          borderRadius:10,
      }
  })
  