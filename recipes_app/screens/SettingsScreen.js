import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { getThemeColors } from '../components/Theme'; 

const SettingsScreen = ({ toggleTheme, isDarkTheme }) => {
    const { backgroundColor, textColor, subtitleColor } = getThemeColors(isDarkTheme);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.text, { color: textColor }]}>Dark Mode</Text>
            <Switch
                value={isDarkTheme}
                onValueChange={toggleTheme} // This will toggle between light and dark mode
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
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
