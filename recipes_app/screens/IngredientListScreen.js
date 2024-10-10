import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      <Text>Ingredient 1</Text>
      <Text>Ingredient 2</Text>
      <Text>Ingredient 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default IngredientListScreen;
