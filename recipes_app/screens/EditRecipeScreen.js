import React, {useState, useEffect} from 'react';
import {View,TextInput,Button,Image,TouchableOpacity,Text,StyleSheet,Alert,ScrollView,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateRecipe} from '../database/database'; 
import {categories} from '../data/categories'; 
import {getThemeColors} from '../components/Theme'; 

const EditRecipeScreen = ({route, navigation, isDarkTheme}) => {
  const {recipe} = route.params; // Get the passed recipe object from navigation params

  const [title, setTitle] = useState(recipe.title);
  const [time, setTime] = useState(recipe.time); // Initialize time from recipe
  const [serves, setServes] = useState(recipe.serves); // Initialize serves from recipe
  const [ingredients, setIngredients] = useState(recipe.ingredients); // Initialize ingredients
  const [directions, setDirections] = useState(recipe.directions); // Initialize directions
  const [category, setCategory] = useState(recipe.category);
  const [imageUri, setImageUri] = useState(recipe.imageUri); // Set initial imageUri to the existing one
  const [username, setUsername] = useState('');

  // Get the theme colors based on the current theme (dark or light)
  const {
    backgroundColor,
    inputTextColor,
    inputPlaceholderColor,
    cardBackgroundColor,
    buttonBackground,
    buttonTextColor,
  } = getThemeColors(isDarkTheme);

  // Get the logged-in username from AsyncStorage
  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      setUsername(storedUsername);
    };
    fetchUsername();
  }, []);

   // Update state when a new recipe is passed through route params
   useEffect(() => {
    if (route.params && route.params.recipe) {
      const { recipe } = route.params;
      setTitle(recipe.title);
      setTime(recipe.time);
      setServes(recipe.serves);
      setIngredients(recipe.ingredients);
      setDirections(recipe.directions);
      setCategory(recipe.category);
      setImageUri(recipe.imageUri);
    }
  }, [route.params]);

  // Function to handle image picking
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 1024,
        maxHeight: 1024,
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.error('ImagePicker Error: ', response.error);
        } else if (response.assets && response.assets.length > 0) {
          // Only update imageUri if a new image is picked
          const source = {uri: response.assets[0].uri};
          setImageUri(source.uri); // Save the new image URI to state
        }
      },
    );
  };

  // Function to handle recipe update
  const handleUpdateRecipe = () => {
    if (recipe.username !== username) {
      Alert.alert(
        'Permission Denied',
        'You can only edit recipes you have added.',
      );
      return;
    }

    if (title && time && serves && ingredients && directions && category && imageUri) {
      updateRecipe(recipe.id,title,category,imageUri,time,serves,ingredients,directions,
        () => {
          Alert.alert('Success', 'Recipe updated successfully');
          navigation.navigate('MyRecipes');
        },
      );
    } else {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
    }
  };

  return (
    <ScrollView style={[styles.container, {backgroundColor}]}>
      <TextInput
        style={[
          styles.input,
          {color: inputTextColor, borderColor: cardBackgroundColor},
        ]}
        placeholder="Title"
        placeholderTextColor={inputPlaceholderColor}
        value={title}
        onChangeText={setTitle}
      />

      {/* Category Picker */}
      <Picker
        selectedValue={category}
        style={[styles.picker, {borderColor: cardBackgroundColor}]}
        onValueChange={itemValue => setCategory(itemValue)}>
        {categories.map(cat => (
          <Picker.Item label={cat.title} value={cat.title} key={cat.id} />
        ))}
      </Picker>

      <TextInput
        style={[
          styles.input,
          {color: inputTextColor, borderColor: cardBackgroundColor},
        ]}
        placeholder="Total Time (e.g., 10 mins)"
        placeholderTextColor={inputPlaceholderColor}
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={[
          styles.input,
          {color: inputTextColor, borderColor: cardBackgroundColor},
        ]}
        placeholder="Serves (e.g., 4)"
        placeholderTextColor={inputPlaceholderColor}
        value={serves}
        onChangeText={setServes}
      />
      <TextInput
        style={[
          styles.inputs,
          {color: inputTextColor, borderColor: cardBackgroundColor},
        ]}
        placeholder="Ingredients (separated by new lines)"
        placeholderTextColor={inputPlaceholderColor}
        value={ingredients}
        multiline
        numberOfLines={8}
        onChangeText={setIngredients}
      />
      <TextInput
        style={[
          styles.inputs,
          {color: inputTextColor, borderColor: cardBackgroundColor},
        ]}
        placeholder="Directions (separated by new lines)"
        placeholderTextColor={inputPlaceholderColor}
        value={directions}
        multiline
        numberOfLines={8}
        onChangeText={setDirections}
      />

      <TouchableOpacity
        onPress={pickImage}
        style={[styles.imagePickerButton, {backgroundColor: buttonBackground}]}>
        <Text style={[styles.imagePickerText, {color: buttonTextColor}]}>
          {imageUri ? 'Change Image' : 'Select Image'}
        </Text>
      </TouchableOpacity>

      {/* Display the image if it exists */}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}

      <View style={styles.buttonContainer}>
        <Button
          title="Update Recipe"
          onPress={handleUpdateRecipe}
          color={buttonBackground}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
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

export default EditRecipeScreen;
