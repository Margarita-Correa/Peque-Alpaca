import React from 'react'
import {Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../constants/colors'
import { useSelector } from 'react-redux'

const Header = ({route}) => {

  const categorySelected = useSelector(state => state.shop.value.categorySelected)
  const {height, width}= useWindowDimensions()

  return (
    <View style = {styles.container}>
      <Image style={styles.logo } source={require('../../assets/logo.png')}/>
      <Text style = {width >= 360 ? styles.text : styles.textmin}>{route.name}</Text>
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
    backgroundColor: colors.lilac900,
  },
  text: {
    fontFamily:'Sacramento',
    fontSize: 30,
    color: colors.lilac200,
  },
  textmin:{
    fontFamily:'Sacramento',
    fontSize: 20,
    color: colors.lilac200,
  },
  logo:{
    width:"8%",
    height: 60,
    margin:20
  }
})