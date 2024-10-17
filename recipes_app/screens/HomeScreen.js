import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { getThemeColors } from '../components/Theme';

const HomeScreen = ({ navigation, isDarkTheme }) => {
  const { backgroundColor, textColor, subtitleColor, buttonBackground, buttonTextColor } = getThemeColors(isDarkTheme);

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      {/* Logo Image above the title */}
      <Image 
        source={require('../assets/home.jpg')} 
        style={styles.logo}
      />
      
      <Text style={[styles.title, { color: textColor }]}>Welcome to Recipe App</Text>
      <Text style={[styles.subtitle, { color: subtitleColor }]}>Find and Share Recipes</Text>

      {/* Dishes section with salmon and chocolate cake */}
      <View style={styles.dishContainer}>
        <View style={styles.dishBox}>
          <Image 
            source={require('../assets/salmon.jpg')} // Adjust the path based on your project structure
            style={styles.dishImage}
          />
          <Text style={[styles.dishCategory, { color: subtitleColor }]}>Main Dish</Text>
          <Text style={[styles.dishTitle, { color: textColor }]}>Salmon</Text>
        </View>

        <View style={styles.dishBox}>
          <Image 
            source={require('../assets/chocolate_cake.jpg')} // Adjust the path based on your project structure
            style={styles.dishImage}
          />
          <Text style={[styles.dishCategory, { color: subtitleColor }]}>Dessert</Text>
          <Text style={[styles.dishTitle, { color: textColor }]}>Chocolate Cake</Text>
        </View>
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: buttonBackground }]} 
        onPress={() => navigation.navigate('Categories')}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>Go to Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: buttonBackground }]} 
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>Search Recipes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,           // Ensures it takes the full height of the screen
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 0,     // Remove any padding from the top
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 10,
    resizeMode: 'contain',
    marginTop: 0,      // Ensure no margin at the top of the image
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  dishContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dishBox: {
    alignItems: 'center',
    width: 150,
    marginHorizontal: 10,
  },
  dishImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  dishCategory: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dishTitle: {
    fontSize: 12,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
