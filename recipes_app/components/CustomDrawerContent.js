import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawerContent(props) {
  const { isDarkTheme, setRecipes, setUsername } = props;

  // Define colors based on the theme
  const textColor = isDarkTheme ? '#FFFFFF' : '#333';

  // Function to handle logout
  const handleLogout = async () => {
    try {
      console.log('Logging out...');
      await AsyncStorage.removeItem('username');  // Remove the stored username
      console.log('Username removed from AsyncStorage');
      setRecipes([]);  // Clear recipes state
      setUsername('');  // Clear username state
      console.log('Cleared username and recipes state');
      props.navigation.navigate('Login');  // Navigate to the Login screen
      console.log('Navigated to Login screen');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    // The scrollable container for the drawer content
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}>
      <View style={styles.menuContainer}>
        {/* Close Button: Closes the drawer when pressed */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => props.navigation.closeDrawer()}>
          <Icon name="arrow-back-outline" size={25} color="#4CAF50" />
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Profile')}>
          <Icon name="person-outline" size={22} color="#4CAF50" />
          <Text style={[styles.drawerLabel, {color: textColor}]}>Profile</Text>
        </TouchableOpacity>

        {/* Home Button: Navigates to the Home screen */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Home')}>
          <Icon name="home-outline" size={22} color="#4CAF50" />
          <Text style={[styles.drawerLabel, {color: textColor}]}>Home</Text>
        </TouchableOpacity>

        {/* Categories Button: Navigates to the Categories screen */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Categories')}>
          <Icon name="list-outline" size={22} color="#4CAF50" />
          <Text style={[styles.drawerLabel, {color: textColor}]}>
            Categories
          </Text>
        </TouchableOpacity>

        {/* My Recipes Button: Navigates to the MyRecipesScreen */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('MyRecipes')}>
          <Icon name="book-outline" size={22} color="#4CAF50" />
          <Text style={[styles.drawerLabel, {color: textColor}]}>
            My Recipes
          </Text>
        </TouchableOpacity>

        {/* Search Button: Navigates to the Search screen */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Search')}>
          <Icon name="search-outline" size={22} color="#4CAF50" />
          <Text style={[styles.drawerLabel, {color: textColor}]}>Search</Text>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Settings')}>
          <Icon name="settings-outline" size={22} color="#4CAF50" />
          <Text style={[styles.drawerLabel, {color: textColor}]}>Settings</Text>
        </TouchableOpacity>

        {/* Logout */}
        <View style={styles.bottomDrawerSection}>
          <TouchableOpacity style={styles.drawerItem} onPress={handleLogout}>
            <Icon name="log-out-outline" size={22} color="#4CAF50" />
            <Text style={[styles.drawerLabel, { color: textColor }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  // Style for the drawer content container
  drawerContent: {
    flex: 1,
  },
  // Style for the menu container to center the menu items
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  // Style for each drawer item (Home, Categories, Search)
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  // Text style for the drawer labels
  drawerLabel: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Style for the close button at the top of the drawer
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
