import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../data/products.json'
import { colors } from '../constants/colors'

const ItemDetail = ({ idSelected, setProductSelected }) => {

  const [product, setProduct] = useState(null)
  const [orientation, setOrientation ] = useState("portrait")
  const {height, width} = useWindowDimensions()


  useEffect(()=>{
    const productSelected = products.find(
      (product) => product.id === idSelected)
    setProduct(productSelected)
  }, [idSelected])

  useEffect(()=>{
  if(width>height) setOrientation("landscape")
  else setOrientation("portrait")
  },[width, height])

  return (
    <View style={styles.detailContainer}>          
    <Button onPress={() => setProductSelected("")} title="Ver otros productos" />
      {product ? (
        <View style={styles.detail}>
          <Image
            source={{ uri: product.images[0] }}
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode='cover'
          />
          <View style={ styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Agregar al carrito"></Button>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  detailContainer:{
    marginTop:20,
  },
  detail: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 20,
    padding:20,
    borderRadius:20,
    backgroundColor: colors.lilac200
  },
  image: {
    width: '100%',
    height: 200
  },
  imageLandscape:{
    width: '45%',
    height: 100
  },
  textContainer: {
    flexDirection: "column",
  },
  price: {
    textAlign: 'right',
    width: '100%'
  }
})