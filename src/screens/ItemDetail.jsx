import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../data/products.json'
import { colors } from '../constants/colors'

const ItemDetail = ({route, navigation}) => {

  const [product, setProduct] = useState(null)
  const [orientation, setOrientation ] = useState("portrait")
  const {height, width} = useWindowDimensions()

const {productId : idSelected} = route.params

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
    <Button  onPress={() => navigation.goBack()} title="Ver otros productos" />
      {product ? (
        <View style={styles.detail}>
          <Image
            source={{ uri: product.images[0] }}
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode='contain'
          />
          <View style={ styles.textContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
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
    flex:1,
    backgroundColor:colors.lilac400,
  },
  detail: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    padding:10,
    margin:15,
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
  title:{
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
  },
  description:{
    textAlign:"left",
  },
  price:{
    textAlign:"left",
    fontWeight: 'bold',
    fontSize: 20,
  }
})