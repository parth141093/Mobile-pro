import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getRecipesByCategory } from '../database/database'; 
import { getThemeColors } from '../components/Theme';

const RecipesListScreen = ({ route, navigation,isDarkTheme }) => {
  const { categoryTitle } = route.params;
  const [recipes, setRecipes] = useState([]);

  // Get theme colors based on the current theme
  const {
    backgroundColor,    
    textColor,          
    subtitleColor,
    cardBackgroundColor ,
    cardBorderColor     
  } = getThemeColors(isDarkTheme);

  useEffect(() => {
    // Fetch recipes for the selected category
    getRecipesByCategory(categoryTitle, (dbRecipes) => {
      setRecipes(dbRecipes); // Set the recipes for this category
    });
  }, [categoryTitle]);

  const navigateToRecipeDetails = (recipe) => {
    navigation.navigate('RecipeDetailScreen', { recipe });
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.header, { color: textColor }]}>Recipes in {categoryTitle}</Text>
      {recipes.length > 0 ? (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.recipeCard, { backgroundColor: cardBackgroundColor, borderColor: cardBorderColor }]}>
              {/* Display the recipe image */}
              {item.imageUri ? (
                <Image source={{ uri: item.imageUri }} style={styles.image} />
              ) : (
                <Text style={{ color: textColor }}>No image available</Text>
              )}

              <View style={styles.recipeDetails}>
                {/* Display the recipe title */}
                <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
                <Text style={[styles.category, { color: subtitleColor }]}>{item.category}</Text>

                {/* Display the user who added the recipe */}
                <Text style={[styles.username, { color: subtitleColor }]}>Added by: {item.username}</Text>

                {/* Show Details Button */}
                <TouchableOpacity onPress={() => navigateToRecipeDetails(item)}>
                  <Text style={[styles.showDetails, { color: '#4CAF50' }]}>Show Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={[styles.noRecipesText, { color: textColor }]}>No recipes available for this category.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
    borderWidth: 1, 
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  recipeDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    marginBottom: 8,
  },
  username: {
    fontSize: 12,
    marginBottom: 5,
  },
  showDetails: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  },
  noRecipesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});


export default RecipesListScreen;
