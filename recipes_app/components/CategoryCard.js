import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ title, image, recipes, onPress, textColor,borderColor,backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.card, { borderColor }]} onPress={onPress}>
      {/* Directly pass the image since it's a local image using require() */}
      <Image source={image} style={styles.image} />
      <View style={[styles.textContainer, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        <Text style={[styles.recipes, { color: textColor }]}>{recipes} recipes</Text>
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
