import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Image above the title */}
      <Image 
        source={require('../assets/home.jpg')} 
        style={styles.logo}
      />
      
      <Text style={styles.title}>Welcome to Recipe App</Text>
      <Text style={styles.subtitle}>Find and Share Recipes</Text>

      {/* Dishes section with salmon and chocolate cake */}
      <View style={styles.dishContainer}>
        <View style={styles.dishBox}>
          <Image 
            source={require('../assets/salmon.jpg')} // Adjust the path based on your project structure
            style={styles.dishImage}
          />
          <Text style={styles.dishCategory}>Main Dish</Text>
          <Text style={styles.dishTitle}>Salmon</Text>
        </View>

        <View style={styles.dishBox}>
          <Image 
            source={require('../assets/chocolate_cake.jpg')} // Adjust the path based on your project structure
            style={styles.dishImage}
          />
          <Text style={styles.dishCategory}>Dessert</Text>
          <Text style={styles.dishTitle}>Chocolate Cake</Text>
        </View>
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Categories')}
      >
        <Text style={styles.buttonText}>Go to Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.buttonText}>Search Recipes</Text>
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
    backgroundColor: '#f5f5f5',
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
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
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
    color: '#555',
  },
  dishTitle: {
    fontSize: 12,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
