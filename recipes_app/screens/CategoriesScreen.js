import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import {getThemeColors} from '../components/Theme';
import {getRecipesByCategory} from '../database/database';
import {useFocusEffect} from '@react-navigation/native';

// Predefined categories with their IDs, titles, and images
const categories = [
  {id: '1',title: 'Desserts',image: require('../assets/desserts_categorie.png'),},
  {id: '2', title: 'Lunch', image: require('../assets/lunch_categorie.png')},
  {id: '3', title: 'Vegan', image: require('../assets/vegan_categories.png')},
  {id: '4', title: 'Drinks', image: require('../assets/drinks_categories.png')},
  {id: '5',title: 'Smoothies',image: require('../assets/smoothies_categories.png'),},
];

const CategoriesScreen = ({navigation, isDarkTheme}) => {
  const {backgroundColor, textColor, cardBackgroundColor, cardBorderColor} =
    getThemeColors(isDarkTheme);
  const [recipeCounts, setRecipeCounts] = useState({});

  // Fetch the dynamic recipe counts for each category
  const fetchRecipeCounts = async () => {
    let counts = {};

    // Use Promise.all to wait for all asynchronous operations in the loop
    const promises = categories.map(category => {
      return new Promise((resolve, reject) => {
        getRecipesByCategory(category.title, dbRecipes => {
          counts[category.title] = dbRecipes.length; // Store the count of recipes for each category
          resolve(); // Resolve the promise after fetching the recipes
        });
      });
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    console.log('Updated recipeCounts: ', counts); // Debugging
    setRecipeCounts(counts); // Update state with recipe counts
  };

  // Use focus effect to refetch recipe counts when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchRecipeCounts();
    }, []),
  );

  useEffect(() => {
    console.log('Current recipeCounts:', recipeCounts);
  }, [recipeCounts]); //

  const handlePress = categoryTitle => {
    // Navigate to RecipesListScreen and pass the selected category title
    navigation.navigate('RecipesListScreen', {categoryTitle});
  };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        extraData={recipeCounts}
        renderItem={({item}) => (
          <CategoryCard
            title={item.title}
            image={item.image}
            recipes={recipeCounts[item.title] || 0}
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
