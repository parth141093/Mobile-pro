import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { getThemeColors } from '../components/Theme';

const RecipeDetailScreen = ({ route, isDarkTheme }) => {
  const { recipe } = route.params;

  // Get theme colors based on the current theme
  const { backgroundColor, textColor, subtitleColor, cardBackgroundColor } = getThemeColors(isDarkTheme);

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      {/* Main container */}
      <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
        {/* Recipe Image */}
        {recipe.imageUri && (
          <Image source={{ uri: recipe.imageUri }} style={styles.image} />
        )}

        {/* Recipe Title - Centered */}
        <Text style={[styles.title, { color: textColor }]}>{recipe.title}</Text>

        {/* Category - Centered */}
        <Text style={[styles.category, { color: subtitleColor }]}>
          {recipe.category.toUpperCase()}
        </Text>

        {/* Time and Serves - Using icons and centered */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Icon name="time-outline" size={18} color="#4CAF50" style={styles.icon} />
            <Text style={[styles.infoText, { color: textColor }]}>{recipe.time}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="restaurant-outline" size={18} color="#4CAF50" style={styles.icon} />
            <Text style={[styles.infoText, { color: textColor }]}>{recipe.serves}</Text>
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Ingredients:</Text>
          {recipe.ingredients.split('\n').map((ingredient, index) => (
            <Text key={index} style={[styles.ingredientText, { color: textColor }]}>
              • {ingredient}
            </Text>
          ))}
        </View>

        {/* Directions */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Directions:</Text>
          {recipe.directions.split('\n').map((direction, index) => (
            <Text key={index} style={[styles.directionsText, { color: textColor }]}>
              {index + 1}. {direction}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff', 
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  icon: {
    marginRight: 5,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientText: {
    fontSize: 18,
    marginBottom: 5,
    lineHeight: 24,
  },
  directionsText: {
    fontSize: 18,
    marginBottom: 10,
    lineHeight: 24,
  },
});

export default RecipeDetailScreen;
