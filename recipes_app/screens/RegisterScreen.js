import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getThemeColors } from '../components/Theme'; 

const RegisterScreen = ({ navigation, isDarkTheme }) => {
  const [username, setUsername] = useState('');  // Add username state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Get the theme colors
  const {inputPlaceholderColor,
    inputTextColor,
    cardBorderColor,
    backgroundColor } = getThemeColors(isDarkTheme); 

  // Function to handle registration logic
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Make a POST request to the registration endpoint
        const response = await fetch('https://perfect-impulse-434712-d1.lm.r.appspot.com/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Specify the request content type as JSON
            },
            body: JSON.stringify({ username, email, password }), // Send username with the request
          });

      const data = await response.json();

      if (response.status === 201) {
        alert('Registration successful');
        navigation.navigate('Login'); // Navigate to login after registration
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('An error occurred');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Username input field */}
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Username"
        placeholderTextColor={inputPlaceholderColor}
        value={username}
        onChangeText={setUsername}
      />
      {/* Email input field */}
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Email"
        placeholderTextColor={inputPlaceholderColor}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {/* Password input field */}
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Password"
        placeholderTextColor={inputPlaceholderColor}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* Confirm password input field */}
      <TextInput
        style={[styles.input, { color: inputTextColor, borderColor: cardBorderColor }]}
        placeholder="Confirm Password"
        placeholderTextColor={inputPlaceholderColor}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {/* Register button */}
      <Button title="Register" onPress={handleRegister} color={'#4CAF50'} />

      {/* Link to navigate to the login screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
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

export default RegisterScreen;
