import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/SplashScreen';
import { enableScreens } from 'react-native-screens';

//Enable native screens for better performance
enableScreens();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Drawer Navigator for main screens
function DrawerNavigator () {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false,}}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Search" component={SearchScreen} />
  </Drawer.Navigator>
  );
}

//Stack Navigator for SplashScreen and DrawerNavigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen  name="MainApp" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
