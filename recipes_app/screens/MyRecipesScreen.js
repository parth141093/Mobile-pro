import React, {useEffect, useState} from 'react';
import {View,FlatList,Text,StyleSheet,Alert,Image,TouchableOpacity,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserRecipes, deleteRecipe} from '../database/database';
import {useFocusEffect} from '@react-navigation/native';
import { getThemeColors } from '../components/Theme'; 

const MyRecipesScreen = ({navigation,isDarkTheme}) => {
  const [recipes, setRecipes] = useState([]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  // Get the theme colors based on the current theme (dark or light)
  const { buttonBackground, textColor, backgroundColor, cardBackgroundColor, cardBorderColor } = getThemeColors(isDarkTheme);


  // Fetch the username from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        Alert.alert('Error', 'Username not found.');
        navigation.navigate('Login');
      }
    };
    fetchUsername();
  }, [navigation]);

  // Refresh the recipes when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      if (username) {
        getUserRecipes(username, fetchedRecipes => {
          setRecipes(fetchedRecipes); // Set the fetched recipes
          setLoading(false); // Stop loading once recipes are fetched
        });
      }
    }, [username]),
  );

  // Handle deleting a recipe
  const handleDeleteRecipe = id => {
    deleteRecipe(id, () => {
      Alert.alert('Recipe deleted');
      getUserRecipes(username, setRecipes); // Refresh the recipe list after deletion
    });
  };

  // Handle editing a recipe
  const handleEditRecipe = recipe => {
    navigation.navigate('EditRecipe', {recipe});
  };

  // If still loading data, show a loading spinner or message
  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor }]}>
        <Text style={{ color: textColor }}>Loading recipes...</Text>
      </View>
    );
  }

  // Show message if no recipes found
  if (recipes.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={{ color: textColor }}>No recipes found for {username}.</Text>
      </View>
    );
  }

  // Render function for each recipe item
  const renderRecipeItem = ({item}) => (
    <View style={[styles.recipeContainer, { backgroundColor: cardBackgroundColor, borderColor: cardBorderColor }]}>
      <View style={styles.contentContainer}>
        {/* Left side: Image */}
        {item.imageUri ? (
          <Image source={{uri: item.imageUri}} style={styles.image} />
        ) : (
          <Text>No image available</Text>
        )}

        {/* Right side: Text content */}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: textColor }]}>
            {item?.title || 'No title available'}
          </Text>
          <Text style={[styles.category, { color: textColor }]}>
            {item?.category || 'No category available'}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RecipeDetailScreen', {recipe: item})
            }>
            <Text style={styles.showDetails}>Show Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom: Custom Styled Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => handleEditRecipe(item)}
          style={[styles.editButton, { backgroundColor: buttonBackground }]}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteRecipe(item.id)}
          style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id?.toString() || Math.random().toString()}
        renderItem={renderRecipeItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeContainer: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  contentContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  image: {
    width: 90, 
    height: 90, 
    borderRadius: 10,
    marginRight: 15, 
  },
  textContainer: {
    flex: 1, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
  },
  showDetails: {
    fontSize: 14,
    color: '#4CAF50', 
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 5,
    backgroundColor:'red'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MyRecipesScreen;
