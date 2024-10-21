import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To store and retrieve JWT
import { getThemeColors } from '../components/Theme';

const ProfileScreen = ({ navigation, isDarkTheme }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // To show loading indicator

  // Get the colors based on the dark theme
  const profileStyles =  getThemeColors(isDarkTheme);

  // Function to fetch user profile data
  const fetchProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      navigation.navigate('Login');  // Redirect to login if token is missing
      return;
    }
  
    try {
      const response = await fetch('https://perfect-impulse-434712-d1.lm.r.appspot.com/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  // Ensure token is sent as Bearer token
        },
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        setUser(data);  // Set user data
      } else {
        alert(data.message || 'Failed to fetch profile');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch profile data when the component mounts
  useEffect(() => {
    fetchProfile();
  }, []);

  // Show loading spinner while profile data is being fetched
  if (loading) {
    return <ActivityIndicator size="large" color="#4CAF50" />;
  }

  // Show error message if user data failed to load
  if (!user) {
    return <Text style={{ color: 'red' }}>Failed to load profile</Text>;
  }

  return (
    <View style={[styles.container, { backgroundColor: profileStyles.backgroundColor }]}>
      {/* Profile Icon */}
      <View style={styles.profileIconContainer}>
        <Icon name="person-circle-outline" size={120} color="#4CAF50" />
      </View>
      
      {/* User Information */}
      <View style={styles.infoContainer}>
        <Text style={[styles.label, { color: profileStyles.textColor }]}>Name</Text>
        <Text style={[styles.value, { color: profileStyles.textColor }]}>{user.name}</Text> 

        <Text style={[styles.label, { color: profileStyles.textColor }]}>Email</Text>
        <Text style={[styles.value, { color: profileStyles.textColor }]}>{user.email}</Text>
        
        {/* Mask the password */}
        <Text style={[styles.label, { color: profileStyles.textColor }]}>Password</Text>
        <Text style={[styles.value, { color: profileStyles.textColor }]}>********</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});


export default ProfileScreen;
