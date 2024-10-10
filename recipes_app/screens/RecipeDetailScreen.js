import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route, navigation }) => {
  const { category } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Details</Text>
      <Text>Category: {category}</Text>
      <Button
        title="View Ingredients"
        onPress={() => navigation.navigate('Ingredients')}
      />
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

export default RecipeDetailScreen;
