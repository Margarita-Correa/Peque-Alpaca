import { FlatList, StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"

const Home = ({setCategorySelected}) => {

    return (
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor = {elemento => elemento}
          data = {categories}
          renderItem = {({item}) => 
          <CategoryItem selectCategory={setCategorySelected} category={item}/>}
        />
      </View>
    )
  }
  
  export default Home
  
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
  