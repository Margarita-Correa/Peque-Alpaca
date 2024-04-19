import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colors.lilac900,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.teal200
  }
})