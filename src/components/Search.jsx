import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {FontAwesome6} from '@expo/vector-icons'
import {FontAwesome5} from "@expo/vector-icons"
import {colors} from '../constants/colors'

const Search = ({onSearch=()=>{}, error="", goBack=()=>{}}) => {

  const [keyword, setKeyword] = useState("")
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={()=> onSearch(keyword)}>
        <FontAwesome6 name="searchengin" size={24} color="black"/>
      </Pressable>
      <Pressable onPress={()=> setKeyword("")}>
        <FontAwesome5 name="backspace" size={24} color="black"/>
      </Pressable>
      <Pressable onPress={goBack}>
        <FontAwesome5 name="home" size={24} color="black"/>
      </Pressable>
      {error ? <Text>{error}</Text>:null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.lilac400,
    color: colors.platinum,
    borderRadius: 10,
  },
})