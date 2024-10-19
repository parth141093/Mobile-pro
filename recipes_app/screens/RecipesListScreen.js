import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For the back icon
import { useDb } from '../DbContext'; // Import the custom hook
import { getThemeColors } from '../components/Theme';

const RecipesListScreen = ({ route, navigation, isDarkTheme }) => {
  const { category_id } = route.params; // Receive the category ID passed from CategoriesScreen
  const { getRecipesByCategory } = useDb(); // Access the getRecipesByCategory function from context

  // State to hold fetched recipes
  const [categoryRecipes, setCategoryRecipes] = useState([]);

  // Get theme colors based on dark mode
  const { backgroundColor, textColor, cardBackgroundColor, cardBorderColor } = getThemeColors(isDarkTheme);

  // Fetch recipes when the component mounts
  useEffect(() => {
    const fetchRecipes = () => {
      getRecipesByCategory(category_id, setCategoryRecipes); // Call to fetch recipes by category_id
    };

    fetchRecipes(); // Fetch the recipes
  }, [category_id, getRecipesByCategory]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={categoryRecipes} // Use the fetched recipes
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.recipeCard, { backgroundColor: cardBackgroundColor, borderColor: cardBorderColor }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.recipeInfo}>
              <Text style={[styles.recipeName, { color: textColor }]}>{item.name}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe_id: item.id })}>
                <Text style={styles.showDetails}>Show Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        // ListEmptyComponent={<Text style={[styles.emptyText, { color: textColor }]}>No recipes found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 5,
  },
  recipeInfo: {
    flex: 1,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: '500',
  },
  showDetails: {
    color: '#4CAF50', // Green color for the link
    fontSize: 14,
    alignSelf: 'flex-end', // Align text to the bottom-right
    marginTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default RecipesListScreen;
