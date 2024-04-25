import React from 'react'
import {Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  const {height, width}= useWindowDimensions()

  return (
    <View style = {styles.container}>
      <Image style={styles.logo } source={require('../../assets/logo.png')}/>
      <Text style = {width >= 360 ? styles.text : styles.textmin}>{title}</Text>
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
  textmin:{
    fontFamily:'Sacramento',
    fontSize: 20,
    color: colors.lilac900,
  },
  logo:{
    width:"8%",
    height: 60,
    margin:20
  }
})