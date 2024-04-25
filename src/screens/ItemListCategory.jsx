import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import products from '../data/products.json'
import { colors } from '../constants/colors'

const ItemListCategory = ({
  categorySelected = "", 
  setCategorySelected = () =>{},
  setItemIdSelected =()=>{}
  }) => {

  const [keyword, setKeyword] = useState("")
  const [error, setError] = useState("")
  const [productsFiltered, setProducstFiltered] = useState([])

  useEffect(()=>{
    regex =/\d/
    const containesDigits = (regex.test(keyword))
    if(containesDigits){
      setError("No use digitos para buscar")
      return
    }

    const productsPreFiltered = products.filter(
      product => product.category === categorySelected)

    const productsFilter = productsPreFiltered.filter(
    product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    )
    setProducstFiltered(productsFilter)
    setError("")
  }, [keyword,categorySelected])

  return (
    <View style={styles.flatListContainer}>
      <Search onSearch={setKeyword} error={error} goBack={()=> setCategorySelected("")} />
      <FlatList
        data={productsFiltered}
        renderItem={({item})=>
          <ProductItem product={item}  setItemIdSelected={setItemIdSelected}/>}
        keyExtractor={(product)=>product.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.lilac600,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
})