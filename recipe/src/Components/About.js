import React from "react";
import "../CSS/about.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About MealMaster</h1>
        <p>
          Welcome to MealMaster, your ultimate culinary chatbot companion! MealMaster is designed to help you explore a wide variety of recipes, find inspiration for your next meal, and make cooking enjoyable and easy. Whether you're a seasoned chef or just starting out in the kitchen, MealMaster has something for everyone.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make cooking accessible and enjoyable for everyone. We aim to provide you with a seamless and interactive experience, offering personalized recipe recommendations, preparation tips, and cooking techniques. MealMaster is here to inspire creativity in the kitchen and help you discover new and exciting dishes.
        </p>
        <h2>Features</h2>
        <ul>
          <li><strong>Recipe Database:</strong> Access a vast collection of recipes from various cuisines and dietary preferences.</li>
          <li><strong>Personalized Recommendations:</strong> Get tailored recipe suggestions based on your preferences and dietary needs.</li>
          <li><strong>Cooking Tips:</strong> Discover useful cooking tips and techniques to enhance your culinary skills.</li>
          <li><strong>Interactive Chat:</strong> Engage with our chatbot to get instant answers to your cooking-related queries.</li>
          <li><strong>Video Tutorials:</strong> Watch step-by-step video tutorials for selected recipes.</li>
          <li><strong>Save and Share:</strong> Save your favorite recipes and share them with friends and family.</li>
        </ul>
        <h2>Meet the Team</h2>
        <p>
          MealMaster is developed by a team of passionate food enthusiasts and tech experts. We are dedicated to providing you with the best possible cooking experience, combining our love for food with cutting-edge technology.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? We'd love to hear from you! Contact us at <a href="/Contact">support@mealmaster.com</a> or follow us on social media.
        </p>
      </div>
    </div>
  );
}
