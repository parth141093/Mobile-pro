// Path: ../../components/MenuImage/MenuImage.js

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const MenuImage = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={require('../assets/menu.png')} // Use an actual path to a menu icon image
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default MenuImage;
