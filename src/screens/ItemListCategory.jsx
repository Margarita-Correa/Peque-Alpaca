import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import products from '../data/products.json'
import { colors } from '../constants/colors'

const ItemListCategory = ({categorySelected = "", setCategorySelected = () =>{}}) => {

  const [keyword, setKeyword] = useState("")
  const [error, setError] = useState("")
  const [productsFiltered, setProducstFiltered] = useState([])

  useEffect(()=>{
    const productsPreFiltered = products.filter(product => product.category === categorySelected)
    const productsFilter = productsPreFiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword))
    setProducstFiltered(productsFilter)
    setError("")
  }, [keyword])

  return (
    <View style={styles.flatListContainer}>
      <Search onSearch={setKeyword} error={error} goBack={()=> setCategorySelected("")} />
      <FlatList
        data={productsFiltered}
        renderItem={({item})=><ProductItem product={item}/>}
        keyExtractor={(product)=>product.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.lilac400,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
})