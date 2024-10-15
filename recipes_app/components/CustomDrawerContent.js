import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
         <Icon name="arrow-back-outline" size={25} color="#4CAF50" />
        </TouchableOpacity>

        {/* Home */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Icon name="home-outline" size={22} color="#4CAF50" />
          <Text style={styles.drawerLabel}>Home</Text>
        </TouchableOpacity>

        {/* Categories */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Categories')}
        >
          <Icon name="list-outline" size={22} color="#4CAF50" />
          <Text style={styles.drawerLabel}>Categories</Text>
        </TouchableOpacity>

        {/* Search */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Search')}
        >
          <Icon name="search-outline" size={22} color="#4CAF50" />
          <Text style={styles.drawerLabel}>Search</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  drawerLabel: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    },
});
