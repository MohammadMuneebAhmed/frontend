import React, { useState } from 'react';
import '../CSS/Recipe.css';

export default function RecipePage() {
  // Example initial state for recipe
  const [recipe, setRecipe] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: [],
    instructions: [],
    prepTime: "",
    cookTime: "",
    servings: "",
    nutrition: {
      calories: "",
      fat: "",
      carbs: "",
      protein: "",
    },
  });

  const [extraInfo, setExtraInfo] = useState("");

  // Function to update recipe and extra info based on user input
  const updateRecipe = (userInput) => {
    // Simulate API call or logic to fetch/update recipe based on userInput
    const fetchedRecipe = {
      image: "https://example.com/image.jpg",
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with rich, flavorful meat sauce.",
      ingredients: [
        "200g spaghetti",
        "400g ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "400g canned tomatoes",
        "2 tbsp tomato paste",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
        "Grated Parmesan cheese",
      ],
      instructions: [
        "Cook spaghetti according to package instructions. Drain and set aside.",
        "In a large pan, cook ground beef over medium heat until browned.",
        "Add chopped onion and minced garlic to the pan, and cook until softened.",
        "Stir in canned tomatoes, tomato paste, and dried oregano. Simmer for 20 minutes.",
        "Season with salt and pepper to taste.",
        "Serve sauce over spaghetti and top with grated Parmesan cheese.",
      ],
      prepTime: "15 minutes",
      cookTime: "30 minutes",
      servings: "4",
      nutrition: {
        calories: "500",
        fat: "20g",
        carbs: "60g",
        protein: "25g",
      },
    };

    // Update state with fetched recipe and extra info based on userInput
    setRecipe(fetchedRecipe);
    setExtraInfo(`Additional details based on query: ${userInput}`);
  };

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title || "Recipe Title"}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.title} className="recipe-image" />}
      <p className="recipe-description">{recipe.description || "Recipe Description"}</p>
      <div className="recipe-details">
        <div className="recipe-info">
          <p><strong>Prep Time:</strong> {recipe.prepTime || "N/A"}</p>
          <p><strong>Cook Time:</strong> {recipe.cookTime || "N/A"}</p>
          <p><strong>Servings:</strong> {recipe.servings || "N/A"}</p>
        </div>
        <div className="recipe-nutrition">
          <h3>Nutritional Information</h3>
          <p><strong>Calories:</strong> {recipe.nutrition.calories || "N/A"}</p>
          <p><strong>Fat:</strong> {recipe.nutrition.fat || "N/A"}</p>
          <p><strong>Carbs:</strong> {recipe.nutrition.carbs || "N/A"}</p>
          <p><strong>Protein:</strong> {recipe.nutrition.protein || "N/A"}</p>
        </div>
      </div>
      <div className="recipe-ingredients">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients listed</li>
          )}
        </ul>
      </div>
      <div className="recipe-instructions">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.length > 0 ? (
            recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))
          ) : (
            <li>No instructions listed</li>
          )}
        </ol>
      </div>
      <div className="recipe-actions">
        <button className="save-btn">Save to Favorites</button>
        <button className="share-btn">Share</button>
      </div>
      <div className="recipe-extra-info">
        <h3>Additional Information</h3>
        <p>{extraInfo || "No additional information available"}</p>
      </div>
    </div>
  );
}
