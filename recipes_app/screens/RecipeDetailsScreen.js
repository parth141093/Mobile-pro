import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailsScreen = ({ route }) => {
  const { recipeName } = route.params; // Receive the recipe name passed from RecipesListScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipeName}</Text>
      {/* Display other recipe details here, such as ingredients */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RecipeDetailsScreen;
