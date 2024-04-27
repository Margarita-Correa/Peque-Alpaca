import {Image, Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../constants/colors'

const ProductItem = ({product, navigation}) => {

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable style={styles.pressable} onPress={()=>navigation.navigate('ItemDetail', {productId: product.id})}>
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resize='cover'
          style={styles.image}
          source={{uri: product.images[0]}}
        />
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    additionalStylesCard:{
        paddingLeft: 10,
        width:300,
        height: 120,
        margin: 10,
    },
    textCategory:{
        color: colors.black
    },
    image:{
      height: 120,
      width: '40%',
      borderRadius: 8
    },
    pressable:{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }

})

