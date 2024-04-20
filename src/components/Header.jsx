import React from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  return (
    <View style = {styles.container}>
      <Image style={styles.logo } source={require('../../assets/logo.png')}/>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor: colors.lilac600,
  },
  text: {
    fontFamily:'Sacramento',
    fontSize: 30,
    color: colors.lilac900,
  },
  logo:{
    width:30,
    height:40,
    margin:30
  }
})