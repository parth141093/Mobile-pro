import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard'; 
import { getThemeColors } from '../components/Theme'; 
import { useDb } from '../DbContext'; // Import the custom hook to access the database

const CategoriesScreen = ({ navigation, isDarkTheme }) => {
  const { getAllCategories } = useDb(); // Access the getAllCategories function
  const [categories, setCategories] = useState([]); // State to hold the fetched categories

  const { backgroundColor, textColor, cardBackgroundColor, cardBorderColor } = getThemeColors(isDarkTheme);

  useEffect(() => {
    // Fetch categories from the database when the component mounts
    if (getAllCategories) {
      getAllCategories(setCategories); // Set the fetched categories into state
    }
  }, [getAllCategories]);

  const handlePress = (category_id) => {
    // Navigate to RecipesListScreen and pass the selected category title
    navigation.navigate('RecipesList', { category_id });
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={categories} // Use the fetched categories
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const imageSource = { uri: item.image };
          return (
          <CategoryCard
            title={item.title}
            image={imageSource}
            recipes={`${item.recipes_count} recipes`} // Pass the recipes count
            textColor={textColor}
            backgroundColor={cardBackgroundColor}
            borderColor={cardBorderColor}
            onPress={() => handlePress(item.id)} // Navigate to the recipes list
          />
        )}
      } 
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
