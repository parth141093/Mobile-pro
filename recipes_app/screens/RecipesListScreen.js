import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For the back icon
import { getThemeColors } from '../components/Theme';

// defining the recipes data for each category
const recipes = {
  Desserts: [
    {
      id: '1',
      name: 'Banana Splits',
      image: require('../assets/banana_splits.png'),
    },
    {
      id: '2',
      name: 'Halloween Ghost Cupcakes',
      image: require('../assets/halloween_ghost_cupcakes.png'),
    },
    {
      id: '3',
      name: 'Banana Pancakes',
      image: require('../assets/healthier_banana.png'),
    },
  ],
  Lunch: [
    {
      id: '1',
      name: 'Pumpkin Ricotta Toast With Hot Honey',
      image: require('../assets/PumpkinRicottaToastsWithHotHoney_1.png'),
    },
    {
      id: '2',
      name: 'Bacon Spinach',
      image: require('../assets/bacon_spinach.png'),
    },
    {
      id: '3',
      name: 'Bacon&Mushroom',
      image: require('../assets/BaconMushroomBreakfastHash_1.png'),
    },
    {
      id: '4',
      name: 'Cheat`s Courgette Dhal',
      image: require('../assets/CheatsCourgetteDhal_1.png'),
    },
    {
      id: '5',
      name: 'Curried red lentil soup',
      image: require('../assets/curried_red_lentil_soup.png'),
    },
    {
      id: '6',
      name: 'Falafel Wraps',
      image: require('../assets/falafel_wraps.png'),
    },
    {
      id: '7',
      name: 'Halloumi Salad',
      image: require('../assets/halloumi_salad.png'),
    },
    {
      id: '8',
      name: 'Korean Turkey Bowl',
      image: require('../assets/korean_turkey_bowl.png'),
    },
    {
      id: '9',
      name: 'Lemon Blueberry French Toast',
      image: require('../assets/LemonBlueberryFrenchToast_1.png'),
    },
    {
      id: '10',
      name: 'Paneer Traybake',
      image: require('../assets/PaneerTraybake_1.png'),
    },
    {
      id: '11',
      name: 'Spinach Salad',
      image: require('../assets/Spinach_Salad.png'),
    },
    {
      id: '12',
      name: 'Fish Finger Sarnie',
      image: require('../assets/FishFingerSarnie_1.png'),
    },
    {
      id: '13',
      name: 'Turkish Eggs on Toast',
      image: require('../assets/Turkish-eggs-on-toast_1.png'),
    }
  ],
  Vegan: [
    {
      id: '1',
      name: 'Creamy Vegan Pasta',
      image: require('../assets/Creamy-cauliflower-pasta_Vegan_1.png'),
    },
    {
      id: '2',
      name: 'Vegan Burrito',
      image: require('../assets/VEGAN-BURRITO_1.png'),
    },
    {
      id: '3',
      name: 'Vegan Noodles',
      image: require('../assets/Veggienoodlestir_1.png'),
    },
    {
      id: '4',
      name: 'Vegan Victoria Sponge',
      image: require('../assets/vegan-egg-free-victoria-sponge_1.png'),
    },
    {
      id: '5',
      name: 'Dark Chocolate Fondants',
      image: require('../assets/VeganDarkChocolateFondants_1.png'),
    },
    {
      id: '6',
      name: 'Vegan Truffles',
      image: require('../assets/Truffles-Vegan_1.png'),
    },
    {
      id: '7',
      name: 'Vegan Chip Cookies',
      image: require('../assets/vegan_chocolate_cookies.png'),
    }
  ],
  Drinks: [
    {
      id: '1',
      name: 'Bubble Tea',
      image: require('../assets/bubble_tea.png'),
    },
    {
      id: '2',
      name: 'Strawberry Lemonade',
      image: require('../assets/Strawberry_Lemonade.png'),
    },
  ],
  Smoothies: [
    {
      id: '1',
      name: 'Banana Smoothie',
      image: require('../assets/banana_smoothie.png'),
    },
    {
      id: '2',
      name: 'Passion Fruit Smoothie',
      image: require('../assets/GreenPassionfruitSmoothies_1.png'),
    },
    {
      id: '3',
      name: 'Kale Smoothie',
      image: require('../assets/kale_smoothie.png'),
    },
    {
      id: '4',
      name: 'Mango Smoothie',
      image: require('../assets/mangosmoothie.png'),
    },
    {
      id: '5',
      name: 'Pineapple&Coconut Smoothie',
      image: require('../assets/pineapple_and_coconut_smoothie_1.png'),
    },
  ],
};

const RecipesListScreen = ({ route, navigation, isDarkTheme  }) => {
  const { categoryTitle } = route.params; // receive the category title passed from CategoriesScreen
  const categoryRecipes = recipes[categoryTitle] || []; // get recipes based on the selected category

  // Get theme colors based on dark mode
  const { backgroundColor, textColor, cardBackgroundColor, cardBorderColor } = getThemeColors(isDarkTheme);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color="#4CAF50" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={categoryRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.recipeCard, { backgroundColor: cardBackgroundColor, borderColor: cardBorderColor }]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.recipeInfo}>
              <Text style={[styles.recipeName, { color: textColor }]}>{item.name}</Text>
              {/*show details link to recipe details screen in the bottom-right */}
              <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipeName: item.name })}>
                <Text style={styles.showDetails}>Show Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 5,
  },
  recipeInfo: {
    flex: 1,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: '500',
  },
  showDetails: {
    color: '#4CAF50', // green color for the link
    fontSize: 14,
    alignSelf: 'flex-end', // align text to the bottom-right
    marginTop: 10,
  },
});

export default RecipesListScreen;