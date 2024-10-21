import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text, StyleSheet, Alert, PermissionsAndroid, Platform, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { addRecipe } from '../database/database';  
import { getThemeColors } from '../components/Theme'; 
import { categories } from '../data/categories'; 

const AddRecipesScreen = ({ navigation, isDarkTheme }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(''); 
  const [serves, setServes] = useState(''); 
  const [ingredients, setIngredients] = useState(''); 
  const [directions, setDirections] = useState(''); 
  const [category, setCategory] = useState(categories[0].title); 
  const [imageUri, setImageUri] = useState(null);
  const [username, setUsername] = useState('');

  // Get the theme colors based on the current theme (dark or light)
  const { buttonBackground, inputPlaceholderColor, backgroundColor, inputTextColor, cardBorderColor } = getThemeColors(isDarkTheme);

  // Get the username from AsyncStorage when the component mounts
  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        Alert.alert('Error', 'No username found. Please log in.');
        navigation.navigate('Login');
      }
    };
    fetchUsername();
    if (Platform.OS === 'android') {
      requestStoragePermission();
    }
  }, [navigation]);

  // Request storage permission on Android
  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'This app needs access to your storage to select images',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'You need to enable storage permissions in settings.');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  // Function to handle image picking
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 600,
      quality: 0.8,
    });

    if (result.assets) {
      setImageUri(result.assets[0].uri);  // Set the image URI
    } else {
      Alert.alert('No image selected', 'Please choose an image to upload.');
    }
  };

  // Function to handle adding the recipe
  const handleAddRecipe = () => {
    if (title.trim() === '' || category.trim() === '' || !imageUri || ingredients.trim() === '' || directions.trim() === '' || time.trim() === '' || serves.trim() === '') {
      Alert.alert('Missing Fields', 'Please fill in all the fields and select an image.');
    } else {
      addRecipe(
        String(title),
        String(category),
        String(imageUri),
        String(time),
        String(serves),
        String(ingredients), 
        String(directions),    
        String(username),
        (id) => {
          Alert.alert('Recipe added successfully!');
          // Clear the input fields
          setTitle('');
          setCategory(categories[0].title);  // Reset category to default
          setImageUri(null);
          setTime('');
          setServes('');
          setIngredients('');
          setDirections('');
  
          navigation.navigate('MyRecipes');
        }
      );
    }
  };
  
  

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Title"
        placeholderTextColor={inputPlaceholderColor}
        value={title}
        onChangeText={setTitle}
      />

      {/* Category Picker */}
      <Picker
        selectedValue={category}
        style={[styles.picker, { color: inputTextColor, borderColor: cardBorderColor }]}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        {categories.map((cat) => (
          <Picker.Item label={cat.title} value={cat.title} key={cat.id} />
        ))}
      </Picker>

      {/* New fields for time, serves, ingredients, directions */}
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Total Time (e.g., 10 mins)"
        placeholderTextColor={inputPlaceholderColor}
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Serves (e.g., 4)"
        placeholderTextColor={inputPlaceholderColor}
        value={serves}
        onChangeText={setServes}
      />
      <TextInput
        style={[styles.inputs, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Ingredients (separated by new lines)"
        placeholderTextColor={inputPlaceholderColor}
        value={ingredients}
        multiline
        numberOfLines={8}
        onChangeText={setIngredients}
      />
      <TextInput
        style={[styles.inputs, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Directions (separated by new lines)"
        placeholderTextColor={inputPlaceholderColor}
        value={directions}
        multiline
        numberOfLines={8}
        onChangeText={setDirections}
      />

      <TouchableOpacity onPress={pickImage} style={[styles.imagePickerButton, { backgroundColor: buttonBackground }]}>
        <Text style={styles.imagePickerText}>
          {imageUri ? 'Change Image' : 'Select Image'}
        </Text>
      </TouchableOpacity>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button title="Add Recipe" onPress={handleAddRecipe} color={buttonBackground} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputs: {
    height: 150,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  imagePickerButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    padding:10,
    marginBottom:50
  },
});

export default AddRecipesScreen;
