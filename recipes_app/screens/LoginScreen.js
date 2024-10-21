import React, {useState} from 'react';
import {View,TextInput,Button,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import {useFocusEffect} from '@react-navigation/native';
import {getThemeColors} from '../components/Theme';

const LoginScreen = ({navigation, isDarkTheme}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   // Get the theme colors
  const {
    buttonBackground,
    inputPlaceholderColor,
    inputTextColor,
    cardBorderColor,
    backgroundColor,
  } = getThemeColors(isDarkTheme);

  // Clear the email and password fields when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setEmail('');
      setPassword('');
    }, []),
  );

   // Function to handle the login process
  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://perfect-impulse-434712-d1.lm.r.appspot.com/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        },
      );

      const data = await response.json();

      if (response.status === 200) {
        await AsyncStorage.setItem('token', data.token); // Store JWT token

        if (data.username) {
          await AsyncStorage.setItem('username', data.username); // Store username if it exists
        }

        alert('Login successful');
        navigation.navigate('MainApp');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred');
    }
  };

  // Render the UI for the login screen
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TextInput
        style={[
          styles.input,
          {color: inputTextColor, borderColor: cardBorderColor},
        ]}
        placeholder="Email"
        placeholderTextColor={inputPlaceholderColor}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[
          styles.input,
          {color: inputTextColor, borderColor: cardBorderColor},
        ]}
        placeholder="Password"
        placeholderTextColor={inputPlaceholderColor}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color={'#4CAF50'} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.linkText, {buttonBackground}]}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  linkText: {
    marginTop: 20,
    color: '#4CAF50',
    textAlign: 'center',
  },
});

export default LoginScreen;
