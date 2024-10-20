import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/SplashScreen';
import RecipesListScreen from './screens/RecipesListScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import CustomDrawerContent from './components/CustomDrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import { enableScreens } from 'react-native-screens';
import { TouchableOpacity, useColorScheme, StatusBar } from 'react-native';
import { DbProvider } from './DbContext'; // Import the DbProvider

enableScreens();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Reintroduce the toggleTheme prop to handle dark mode
function DrawerNavigator({ toggleTheme, isDarkTheme }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} isDarkTheme={isDarkTheme} />}
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        drawerIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={focused ? '#4CAF50' : '#000'} />;
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu-outline" size={30} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Categories"
        options={({navigation}) => ({
          title: 'Categories',
          // Added a button to navigate back to the Home screen from the Categories screen
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name="arrow-back-outline"
                size={25}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}>
        {props => (
          <CategoriesScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="RecipesList"
        options={({navigation}) => ({
          title: 'Recipes List',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name="arrow-back-outline"
                size={25}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}
      >
      {props => (
          <RecipesListScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="RecipeDetails"
        options={({ navigation }) => ({
          title: 'Recipe Details',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
        >
        {props => (
          <RecipeDetailsScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
        </Drawer.Screen>
      <Drawer.Screen
        name="Search"
        options={({ navigation }) => ({
          title: 'Search',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
        component={SearchScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={({ navigation }) => ({
          title: 'Settings',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
        })}
        // Pass the toggleTheme and isDarkTheme props to SettingsScreen
        children={() => <SettingsScreen isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const systemTheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');

  // Use toggleTheme function as in the old code
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DbProvider>
      <>
        {/* Set the StatusBar color based on the theme */}
        <StatusBar
          backgroundColor={isDarkTheme ? '#000000' : '#ffffff'}
          barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen
              name="MainApp"
              children={() => <DrawerNavigator isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />}
            />
            <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </DbProvider>
  );
}
