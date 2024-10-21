import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {DarkTheme,DefaultTheme,NavigationContainer,} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from './screens/SplashScreen';
import RecipesListScreen from './screens/RecipesListScreen'; 
import CustomDrawerContent from './components/CustomDrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddRecipesScreen from './screens/AddRecipesScreen';
import MyRecipesScreen from './screens/MyRecipesScreen';
import EditRecipeScreen from './screens/EditRecipeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import {enableScreens} from 'react-native-screens';
import {TouchableOpacity, useColorScheme, StatusBar} from 'react-native';
import {createRecipesTable} from './database/database';

enableScreens();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator for main screens
function DrawerNavigator({toggleTheme, isDarkTheme, setRecipes, setUsername}) {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent
          {...props}
          setRecipes={setRecipes} // Pass setRecipes from App
          setUsername={setUsername} // Pass setUsername from App
          isDarkTheme={isDarkTheme} // Pass other props as needed
        />
      )} // Use custom drawer content
      screenOptions={({route}) => ({
        headerShown: true,
        drawerIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? '#4CAF50' : '#000'}
            />
          );
        },
      })}>
      <Drawer.Screen
        name="Home"
        options={({navigation}) => ({
          title: 'Home',
          // Added a button to open the drawer from the Home screen
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu-outline"
                size={30}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}>
        {props => (
          <HomeScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>
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
        name="Search"
        options={({navigation}) => ({
          title: 'Search',
          // Added a button to navigate back to the Home screen from the Search screen
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
          <SearchScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Settings"
        options={({navigation}) => ({
          title: 'Settings',
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
          <SettingsScreen
            {...props}
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        options={({navigation}) => ({
          title: 'Profile',
          // Added a button to open the drawer from the Profile screen
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu-outline"
                size={30}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}>
        {props => (
          <ProfileScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="AddRecipe"
        options={({navigation}) => ({
          title: 'Add Recipe',
          // Button to open the drawer
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name="arrow-back-outline"
                size={30}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}>
        {props => (
          <AddRecipesScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="MyRecipes"
        options={({navigation}) => ({
          title: 'My Recipes',
          // Button to open the drawer
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu-outline"
                size={30}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}>
        {props => (
          <MyRecipesScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="EditRecipe"
        options={({navigation}) => ({
          title: 'Edit Recipe',
          // Button to open the drawer
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('MyRecipes')}>
              <Icon
                name="arrow-back-outline"
                size={30}
                color="#4CAF50"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        })}>
        {props => (
          <EditRecipeScreen
            {...props}
            isDarkTheme={isDarkTheme} // Pass the dark mode state here
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

// Stack Navigator for SplashScreen and DrawerNavigator
export default function App() {
  const systemTheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');
  const [recipes, setRecipes] = useState([]); // Add recipes state
  const [username, setUsername] = useState(''); // Add username state

  useEffect(() => {
    // Ensure that the recipes table is created when the app initializes
    createRecipesTable();
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      {/* Set the StatusBar color based on the theme */}
      <StatusBar
        backgroundColor={isDarkTheme ? '#000000' : '#ffffff'}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false, // Hide the header for the splash screen
          }}>
          <Stack.Screen name="Login" options={{title: 'Login'}}>
            {props => <LoginScreen {...props} isDarkTheme={isDarkTheme} />}
          </Stack.Screen>
          <Stack.Screen name="Register" options={{title: 'Register'}}>
            {props => <RegisterScreen {...props} isDarkTheme={isDarkTheme} />}
          </Stack.Screen>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen
            name="RecipesListScreen"
            options={({navigation}) => ({
              headerShown: true, // Enable header for this screen
              title: 'Recipe List',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Categories')}>
                  <Icon
                    name="arrow-back-outline"
                    size={24}
                    color="#4CAF50"
                    style={{marginLeft: 15}}
                  />
                </TouchableOpacity>
              ),
            })}>
            {props => (
              <RecipesListScreen
                {...props}
                isDarkTheme={isDarkTheme} // Pass the dark mode state here
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="RecipeDetailScreen"
            options={({navigation}) => ({
              headerShown: true, // Enable header for this screen
              title: 'Recipe Details',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon
                    name="arrow-back-outline"
                    size={24}
                    color="#4CAF50"
                    style={{marginLeft: 15}}
                  />
                </TouchableOpacity>
              ),
            })}>
            {props => (
              <RecipeDetailScreen
                {...props}
                isDarkTheme={isDarkTheme} 
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="MainApp">
            {props => (
              <DrawerNavigator
                {...props}
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
                setRecipes={setRecipes} // Pass setRecipes to the DrawerNavigator
                setUsername={setUsername} // Pass setUsername to the DrawerNavigator
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
 