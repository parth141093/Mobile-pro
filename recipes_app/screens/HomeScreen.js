import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';  // Import Lottie

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      {/* StatusBar configuration to remove extra space */}
      <StatusBar hidden={true} />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Logo Image above the title */}
        <Image 
          source={require('../assets/home.jpg')} 
          style={styles.logo}
        />
        
        <Text style={styles.title}>Welcome to YumPlate</Text>
        <Text style={styles.subtitle}>Find and Share Recipes</Text>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Categories')}
        >
          <Text style={styles.buttonText}>Go to Categories</Text>
        </TouchableOpacity>

        {/* Amazing Animation */}
        <View style={styles.animationContainer}>
          <LottieView 
            source={require('../assets/animation/animation.json')} 
            autoPlay 
            loop 
            style={styles.animation}
          />
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,

    paddingTop: 0,  // Ensure no padding at the top
    backgroundColor: '#f5f5f5',
    flexGrow: 1,    // Ensure the ScrollView takes up full space
  },
  logo: {
    width: 400,
    height: 211,
    marginBottom: 10,
    resizeMode: 'contain',
    marginTop: 0,   // Remove top margin
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

  animationContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  animation: {
    width: 300,
    height: 250,
  },
});

export default HomeScreen;
