import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDb } from '../DbContext'; // Import the custom hook
import Icon from 'react-native-vector-icons/Ionicons';

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { recipe_id } = route.params; // Receive the recipe ID passed from the previous screen
  const { getDetailsByRecipeId } = useDb(); // Use your custom hook to get DB context
  const [details, setDetails] = useState(null); // State to hold recipe details

  useEffect(() => {
    // Fetch recipe details when the component mounts
    getDetailsByRecipeId(recipe_id, (fetchedDetails) => {
      setDetails(fetchedDetails); // Update state with fetched details
    });
  }, [recipe_id]);

  // Set up header navigation
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Return loading screen if details are not yet fetched
  if (!details) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: details.image }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{details.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Total Time: {details.total_time} mins</Text>
        <Text style={styles.details}>Serves: {details.serves}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>Vegetarian: {details.is_vegetarian ? 'Yes' : 'No'}</Text>
        <Text style={styles.details}>Vegan: {details.is_vegan ? 'Yes' : 'No'}</Text>
      </View>
      {/* Display other recipe details */}
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      <View style={styles.ingredientsContainer}>
        {details.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredientText}>- {ingredient}</Text> // List of ingredients
        ))}
      </View>
      <Text style={styles.sectionTitle}>Preparation:</Text>
      <View style={styles.ingredientsContainer}>
        {details.directions.map((direction, index) => (
          <Text key={index} style={styles.descriptionText}>- {direction}</Text> // List of preparation steps
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the title
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000', // Set color to black
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: 'orange', // Change color to orange for section titles
  },
  ingredientsContainer: {
    marginBottom: 20,
  },
  ingredientText: {
    fontSize: 16,
    lineHeight: 24,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default RecipeDetailsScreen;
