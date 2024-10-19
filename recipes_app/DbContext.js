import React, { createContext, useContext, useEffect, useState } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { categories } from './data/categories';
import { recipes } from './data/recipes';
import { details } from './data/details';
import { Image } from 'react-native';

const DbContext = createContext();

export const useDb = () => {
  return useContext(DbContext);
};

export const DbProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const openDatabase = () => {
      const database = SQLite.openDatabase(
        {
          name: 'recipesDB',
          location: 'default',
        },
        () => {
          console.log('Database opened successfully');
          createTablesIfNotExistAndInsertData(database);

          // Uncomment to drop and recreate tables each time
          // deleteAndCreateTablesAndInsertData(database);
        },
        error => {
          console.log('Error opening database: ', error);
        },
      );
      setDb(database);
    };

    openDatabase();
  }, []);

  const createTablesIfNotExistAndInsertData = database => {
    // Create Categories Table
    database.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            image TEXT
          );`,
        [],
        () => console.log('Categories table created successfully'),
        error => console.log('Error creating categories table: ', error),
      );
    });

    // Create Recipes Table
    database.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            category_id INTEGER,
            image TEXT,
            FOREIGN KEY(category_id) REFERENCES categories(id)
          );`,
        [],
        () => console.log('Recipes table created successfully'),
        error => console.log('Error creating recipes table: ', error),
      );
    });

    // Create Details Table
    database.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS details (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            recipe_id INTEGER,
            total_time INTEGER,
            serves INTEGER,
            is_vegetarian INTEGER,
            is_vegan INTEGER,
            ingredients TEXT,
            directions TEXT,
            FOREIGN KEY(recipe_id) REFERENCES recipes(id)
          );`,
        [],
        () => console.log('Details table created successfully'),
        error => console.log('Error creating details table: ', error),
      );
    });

    // Check if the tables are empty and insert default data
    checkAndInsertDefaultData(database);
  };

  const deleteAndCreateTablesAndInsertData = async database => {
    // Drop existing tables if they exist
    database.transaction(tx => {
      tx.executeSql(
        `DROP TABLE IF EXISTS details;`,
        [],
        () => console.log('Details table dropped successfully'),
        error => console.log('Error dropping details table: ', error),
      );

      tx.executeSql(
        `DROP TABLE IF EXISTS recipes;`,
        [],
        () => console.log('Recipes table dropped successfully'),
        error => console.log('Error dropping recipes table: ', error),
      );

      tx.executeSql(
        `DROP TABLE IF EXISTS categories;`,
        [],
        () => console.log('Categories table dropped successfully'),
        error => console.log('Error dropping categories table: ', error),
      );
    });

    // Recreate tables
    createTablesIfNotExistAndInsertData(database);
  };

  const checkAndInsertDefaultData = async database => {
    // Check if the categories table is empty
    database.transaction(tx => {
      tx.executeSql(
        `SELECT COUNT(*) AS count FROM categories;`,
        [],
        async (tx, results) => {
          const categoryCount = results.rows.item(0).count;
          if (categoryCount === 0) {
            await insertDefaultData(database);
          } else {
            console.log('Default data already exists, skipping insertion.');
          }
        },
        error => console.log('Error checking categories table: ', error),
      );
    });
  };

  const convertImageToBase64 = async (image) => {
    if (typeof image === 'number') {
      // Resolve local asset URI
      const imageUri = Image.resolveAssetSource(image).uri; // Get URI from asset
      const response = await fetch(imageUri);
      const blob = await response.blob();
  
      return new Promise(resolve => {
        const reader = new FileReader(); 
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    } else {
      // For remote images or other cases
      const response = await fetch(image);
      const blob = await response.blob();
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    }
  };

  const insertDefaultData = async database => {
    console.log('Inserting default data...');
  
    // Insert categories
    for (const category of categories) {
      try {
        const base64Image = await convertImageToBase64(category.image);
        
        await new Promise((resolve, reject) => {
          database.transaction(tx => {
            tx.executeSql(
              `INSERT INTO categories (id, title, image) VALUES (?, ?, ?);`,
              [category.id, category.title, base64Image],
              () => {
                console.log(`Category ${category.title} inserted successfully`);
                resolve();
              },
              error => {
                console.log('Error inserting category: ', error);
                reject(error);
              },
            );
          });
        });
      } catch (error) {
        console.error('Error processing category:', error);
      }
    }
  
    // Insert recipes
    for (const recipe of recipes) {
      try {
        const base64Image = await convertImageToBase64(recipe.image);
        
        await new Promise((resolve, reject) => {
          database.transaction(tx => {
            tx.executeSql(
              `INSERT INTO recipes (id, name, category_id, image) VALUES (?, ?, ?, ?);`,
              [recipe.id, recipe.name, recipe.category_id, base64Image],
              () => {
                console.log(`Recipe ${recipe.name} inserted successfully`);
                resolve();
              },
              error => {
                console.log('Error inserting recipe: ', error);
                reject(error);
              },
            );
          });
        });
      } catch (error) {
        console.error('Error processing recipe:', error);
      }
    }
  
    // Insert details
    for (const detail of details) {
      try {
        await new Promise((resolve, reject) => {
          database.transaction(tx => {
            tx.executeSql(
              `INSERT INTO details (id, recipe_id, total_time, serves, is_vegetarian, is_vegan, ingredients, directions) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
              [
                detail.id,
                detail.recipe_id,
                detail.total_time,
                detail.serves,
                detail.is_vegetarian ? 1 : 0,
                detail.is_vegan ? 1 : 0,
                JSON.stringify(detail.ingredients), // Store as JSON
                JSON.stringify(detail.directions), // Store as JSON
              ],
              () => {
                console.log(`Detail for recipe ID ${detail.recipe_id} inserted successfully`);
                resolve();
              },
              error => {
                console.log('Error inserting detail: ', error);
                reject(error);
              },
            );
          });
        });
      } catch (error) {
        console.error('Error processing detail:', error);
      }
    }
  };

  // Fetch categories with recipe count
  const getAllCategories = callback => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT c.*, COUNT(r.id) AS recipes_count
         FROM categories c
         LEFT JOIN recipes r ON c.id = r.category_id
         GROUP BY c.id;`, // Group by category ID to get the count of recipes for each category
        [],
        (tx, results) => {
          const categories = [];
          for (let i = 0; i < results.rows.length; i++) {
            categories.push(results.rows.item(i)); // Push each row item (with recipes_count) to the categories array
          }
          callback(categories); // Return the categories array with recipes_count
        },
        error =>
          console.log('Error fetching categories with recipes count: ', error),
      );
    });
  };

  // Fetch recipes by category
  const getRecipesByCategory = (categoryId, callback) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM recipes WHERE category_id = ?;`,
        [categoryId],
        (tx, results) => {
          const recipes = [];
          for (let i = 0; i < results.rows.length; i++) {
            recipes.push(results.rows.item(i));
          }
          callback(recipes);
        },
        error => console.log('Error fetching recipes by category: ', error),
      );
    });
  };

// Fetch recipe details by recipe ID, including image and name from the recipes table
const getDetailsByRecipeId = (recipeId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT d.*, r.name, r.image 
       FROM details d 
       JOIN recipes r ON d.recipe_id = r.id 
       WHERE d.recipe_id = ?;`,
      [recipeId],
      (tx, results) => {
        if (results.rows.length > 0) {
          const detail = results.rows.item(0);
          detail.ingredients = JSON.parse(detail.ingredients);
          detail.directions = JSON.parse(detail.directions);
          callback(detail);
        } else {
          console.log('No details found for the recipe');
        }
      },
      error => console.log('Error fetching details: ', error),
    );
  });
};

  return (
    <DbContext.Provider
      value={{
        db,
        getAllCategories,
        getRecipesByCategory,
        getDetailsByRecipeId,
      }}>
      {children}
    </DbContext.Provider>
  );
};
