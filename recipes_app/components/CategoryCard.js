import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// CategoryCard component to display each category with title, image, and number of recipes
const CategoryCard = ({ title, image, recipes, onPress, textColor, backgroundColor, borderColor }) => (
  <TouchableOpacity style={[styles.card, { backgroundColor, borderColor }]} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <Text style={[styles.recipes, { color: textColor }]}>{recipes} recipes</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipes: {
    fontSize: 14,
  },
});

export default CategoryCard;
