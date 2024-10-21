import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { getThemeColors } from '../components/Theme'; 
import { getAllRecipes } from '../database/database';  

const SearchScreen = ({ navigation, isDarkTheme }) => {
  const { backgroundColor, textColor, subtitleColor } = getThemeColors(isDarkTheme);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredResults, setFilteredResults] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Fetch all recipes when the screen loads
  useEffect(() => {
    getAllRecipes((fetchedRecipes) => {
      setRecipes(fetchedRecipes);
    });
  }, []);

  // Handle search input
  const handleSearch = (text) => {
    setSearchTerm(text);

    if (text.length > 0) {
      const lowercasedText = text.toLowerCase();

      // Filter recipes by name, category, or user
      const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowercasedText) ||
        recipe.category.toLowerCase().includes(lowercasedText) ||
        recipe.username && recipe.username.toLowerCase().includes(lowercasedText)  
      );

      // Update the filtered results
      setFilteredResults(filteredRecipes);
    } else {
      setFilteredResults([]); // Clear results if no input
    }
  };

  const keyExtractor = (item) => item.id.toString();  // Use recipe ID as the key

  // Render each search result item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('RecipeDetails', { recipeName: item.title })}
    >
      <View style={styles.resultItem}>
        {/* Display the recipe image */}
        {item.imageUri ? <Image source={{ uri: item.imageUri }} style={styles.image} /> : null}
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: textColor }]}>{item.title}</Text>
          <Text style={{ color: subtitleColor }}>
            {item.category}
          </Text>
          <Text style={{ color: subtitleColor }}>
               Added by: {item.username}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: textColor, borderColor: subtitleColor }]}
        placeholder="Search by recipe, category, or user..."
        placeholderTextColor={subtitleColor}
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <Text style={[styles.title, { color: textColor }]}>Search Results</Text>
      {/* Display search results */}
      <FlatList
        data={filteredResults}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ color: subtitleColor }}>No results found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  textContainer: {
    justifyContent: 'center',
    flexShrink: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SearchScreen;
