import SQLite from 'react-native-sqlite-storage';

// Open the database
const db = SQLite.openDatabase(
  { name: 'recipesDB', location: 'default' },
  () => { console.log('Database opened'); },
  error => { console.log('Error opening database: ', error); }
);

// Drop the recipes table if it exists
/*export const dropRecipesTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `DROP TABLE IF EXISTS recipes`,
      [],
      () => {
        console.log('Recipes table dropped');
      },
      error => {
        console.log('Error dropping recipes table:', error);
      }
    );
  });
};*/

// Then recreate the recipes table
export const createRecipesTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        category TEXT,
        imageUri TEXT,
        time TEXT,
        serves TEXT,
        ingredients TEXT,
        directions TEXT,
        username TEXT
      );`,
      [],
      () => {
        console.log('Recipes table created successfully');
      },
      error => {
        console.log('Error creating recipes table: ', error);
      }
    );
  });
};

// Add a new recipe
export const addRecipe = (title, category, imageUri, time, serves, ingredients, directions, username, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO recipes (title, category, imageUri, time, serves, ingredients, directions, username) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, category, imageUri, time, serves, ingredients, directions, username],
        (_, result) => {
          console.log('Recipe added successfully:', result);
          callback(result.insertId);
        },
        (_, error) => {
          console.log('SQL Error:', error);  // Log the entire error object for more detailed info
          console.log('Failed SQL Query:', `INSERT INTO recipes (title, category, imageUri, time, serves, ingredients, directions, username) VALUES (${title}, ${category}, ${imageUri}, ${time}, ${serves}, ${ingredients}, ${directions}, ${username})`);  // Log the query with values
        }
      );
    });
  };

  // Retrieve all recipes (no filters)
export const getAllRecipes = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM recipes',  // SQL to select all recipes from the table
      [],
      (tx, results) => {
        const rows = results.rows;
        let recipes = [];
        for (let i = 0; i < rows.length; i++) {
          recipes.push(rows.item(i));  // Push each recipe to the array
        }
        callback(recipes);  // Pass the recipes to the callback function
      },
      (tx, error) => {
        console.log('Error fetching all recipes:', error);  // Log errors if any
        callback(false);  // Return false to indicate an error
      }
    );
  });
};

// Retrieve all recipes for a specific user
export const getUserRecipes = (username, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM recipes WHERE username = ?',
        [username],
        (tx, results) => {
          const rows = results.rows;
          let recipes = [];
          for (let i = 0; i < rows.length; i++) {
            recipes.push(rows.item(i));
          }
          callback(recipes);
        },
        error => {
          console.log('Error fetching recipes:', error);
        }
      );
    });
  };

  // Retrieve recipes by category
  export const getRecipesByCategory = (category, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM recipes WHERE category = ?',
        [category],
        (tx, results) => {
          const rows = results.rows;
          let recipes = [];
          console.log(`Recipes fetched for category: ${category}`);
          for (let i = 0; i < rows.length; i++) {
            recipes.push(rows.item(i));
          }
          console.log(`Fetched ${recipes.length} recipes for category ${category}`);
          callback(recipes);  // Pass the fetched recipes
        },
        (tx, error) => {
          console.log('Error fetching recipes by category:', error);  // Log any errors
          callback(false);  // Return `false` to signify an error
        }
      );
    });
};

// Update a recipe 
export const updateRecipe = (id, title, category, imageUri, time, serves, ingredients, directions, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE recipes SET title = ?, category = ?, imageUri = ?, time = ?, serves = ?, ingredients = ?, directions = ? WHERE id = ?`,
        [title, category, imageUri, time, serves, ingredients, directions, id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            callback();
          } else {
            console.log('No recipe found to update');
          }
        },
        error => { console.log('Error updating recipe:', error); }
      );
    });
  };

// Delete a recipe
export const deleteRecipe = (id, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            `DELETE FROM recipes WHERE id = ?`,
            [id],
            (tx, results) => {
                if (results.rowsAffected > 0) {
                    callback();
                    console.log('Recipe deleted successfully', results);
                } else {
                    console.log('No recipe found to delete');
                }
            },
            error => { console.log('Error deleting recipe:', error); }
        );
    });
};



