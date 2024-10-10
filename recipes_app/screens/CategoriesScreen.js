import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button
        title="Italian Food"
        onPress={() => navigation.navigate('RecipeDetails', { category: 'Italian' })}
      />
      <Button
        title="Vegan Food"
        onPress={() => navigation.navigate('RecipeDetails', { category: 'Vegan' })}
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

export default CategoriesScreen;
