import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/SplashScreen';
import CustomDrawerContent from './components/CustomDrawerContent'; // Import your custom drawer component
import { enableScreens } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';
import { navigation } from '@react-navigation/native';

enableScreens();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator for main screens
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Icon name={iconName} size={size} color={focused ? '#4CAF50' : '#000'} />;
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          // Added a button to open the drawer from the Home screen
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu-outline" size={30} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          title: 'Categories',
          // Added a button to navigate back to the Home screen from the Categories screen
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          title: 'Search',
          // Added a button to navigate back to the Home screen from the Search screen
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

// Stack Navigator for SplashScreen and DrawerNavigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false, // Hide the header for the splash screen
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="MainApp"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Hide header for DrawerNavigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
