export const getThemeColors = (isDarkTheme) => {
    return {
      backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
      textColor: isDarkTheme ? '#fff' : '#333',
      subtitleColor: isDarkTheme ? '#ccc' : '#555',
      buttonBackground: '#4CAF50',  // Same for both themes
      buttonTextColor: '#fff',      // Same for both themes
    };
  };