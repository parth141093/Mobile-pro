import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { getThemeColors } from '../components/Theme'; // Import function to get colors based on the current theme


const SettingsScreen = ({ toggleTheme, isDarkTheme }) => {
   // Get the text color based on whether dark mode is enabled or not
    const { textColor } = getThemeColors(isDarkTheme);
    return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>Dark Mode</Text>
      {/* Switch to toggle between dark and light mode */}
      <Switch
        value={isDarkTheme}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight:'bold'
  },
});

export default SettingsScreen;
