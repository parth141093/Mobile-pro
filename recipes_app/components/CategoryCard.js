import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ title, image, recipes, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Directly pass the image since it's a local image using require() */}
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.recipes}>{recipes} recipes</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  recipes: {
    fontSize: 14,
    color: '#666',
  },
});

export default CategoryCard;
