import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard'; 
import { getThemeColors } from '../components/Theme'; 

const categories = [
  {
    id: '1',
    title: 'Desserts',
    image: require('../assets/desserts_categorie.png'), 
    recipes: 3,
  },
  {
    id: '2',
    title: 'Lunch',
    image: require('../assets/lunch_categorie.png'), 
    recipes: 12,
  },
  {
    id: '3',
    title: 'Vegan',
    image: require('../assets/vegan_categories.png'), 
    recipes: 7,
  },
  {
    id: '4',
    title: 'Drinks',
    image: require('../assets/drinks_categories.png'),
    recipes: 2,
  },
  {
    id: '5',
    title: 'Smoothies',
    image: require('../assets/smoothies_categories.png'), 
    recipes: 5,
  },
];

const CategoriesScreen = ({ navigation, isDarkTheme }) => {
  const { backgroundColor, textColor,cardBackgroundColor,cardBorderColor } = getThemeColors(isDarkTheme);
  const handlePress = (categoryTitle) => {
    // navigate to RecipesListScreen and pass the selected category title
    navigation.navigate('RecipesList', { categoryTitle });
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            image={item.image}
            recipes={item.recipes}
            textColor={textColor}
            backgroundColor={cardBackgroundColor}
            borderColor={cardBorderColor}
            onPress={() => handlePress(item.title)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default CategoriesScreen;