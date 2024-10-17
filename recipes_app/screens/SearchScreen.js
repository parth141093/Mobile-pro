import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { getThemeColors } from '../components/Theme'; 

const SearchScreen = ({ isDarkTheme }) => {
  const { backgroundColor, textColor, subtitleColor } = getThemeColors(isDarkTheme);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: textColor, borderColor: subtitleColor }]}
        placeholder="Search..."
        placeholderTextColor={subtitleColor}
      />
      <Text style={[styles.title, { color: textColor }]}>Search Results</Text>
      {/* Display search results here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
