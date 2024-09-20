import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Chat');
  };

  return (
    <div className='cover'>
      <div className="box">
        <h1>
          Welcome To <span style={{ color: "orange" }}>MealMaster</span>
        </h1>
        <p>
          Your personal culinary chatbot companion! Are you hungry and in need of inspiration for your next delicious meal? Look no further. FlavorMaster is here to assist you with a wide variety of recipes, preparation tips, and suggested recipe videos.
        </p>
        <button className='btn' style={{ backgroundColor: "orange", color: "whitesmoke" }} onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}
