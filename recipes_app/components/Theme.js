
// Function to return theme-specific colors based on the value of isDarkTheme
export const getThemeColors = (isDarkTheme) => {
    return {
      backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
      textColor: isDarkTheme ? '#fff' : '#333',
      subtitleColor: isDarkTheme ? '#ccc' : '#555',
      buttonBackground: '#4CAF50',  // Same for both themes
      buttonTextColor: '#fff',      // Same for both themes
      cardBackgroundColor: isDarkTheme ? '#1c1c1c' : '#f5f5f5',  // Dark and light background for cards
      cardBorderColor: isDarkTheme ? '#555' : '#ddd',  // Border color based on theme
      
      inputTextColor: isDarkTheme ? '#fff' : '#333',  // Text color inside TextInput fields
      inputPlaceholderColor: isDarkTheme ? '#aaa' : '#777',
    };
  };