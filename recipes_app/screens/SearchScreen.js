import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet,FlatList,TouchableOpacity,Image } from 'react-native';
import { getThemeColors } from '../components/Theme'; 
import { categories } from '../data/categories';
import { recipes } from '../data/recipes'; 


const SearchScreen = ({navigation , isDarkTheme }) => {
  const { backgroundColor, textColor, subtitleColor } = getThemeColors(isDarkTheme);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredResults, setFilteredResults] = useState([]);

 // Handle search input
 const handleSearch = (text) => {
  setSearchTerm(text);

  if (text.length > 0) {
    const lowercasedText = text.toLowerCase();

    // Filter categories by title
    const filteredCategories = categories.filter(category =>
      category.title.toLowerCase().includes(lowercasedText)
    );

    // Filter recipes by name
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(lowercasedText)
    );

    // Combine both category and recipe results
    setFilteredResults([...filteredCategories, ...filteredRecipes]);
  } else {
    setFilteredResults([]); // Clear results if no input
  }
};

const keyExtractor = (item) => {
  if (item.title) {
    // If it's a category, return a unique key combining ID and title
    return item.id + item.title;
  } else {
    // If it's a recipe, return a unique key combining ID and name
    return item.id + item.name;
  }
};

 // Render each search result item
 const renderItem = ({ item }) => {
  const isCategory = item.title !== undefined; // Check if the item is a category

  return (
    <TouchableOpacity
      onPress={() => {
        if (isCategory) {
          // If it's a category, navigate to RecipesList with the category title
          navigation.navigate('RecipesList', { categoryTitle: item.title });
        } else {
          // If it's a recipe, navigate to RecipeDetails with the recipe name
          navigation.navigate('RecipeDetails', { recipeName: item.name });
        }
      }}
    >
      <View style={styles.resultItem}>
        {/* Display the image for categories or recipes */}
        {item.image && <Image source={item.image} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: textColor }]}>{isCategory ? item.title : item.name}</Text>
          <Text style={{ color: subtitleColor }}>
            {isCategory ? 'Category' : item.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: textColor, borderColor: subtitleColor }]}
        placeholder="Search by recipe or category..."
        placeholderTextColor={subtitleColor}
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <Text style={[styles.title, { color: textColor }]}>Search Results</Text>
      {/* Display search results here */}
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
