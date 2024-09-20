import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Chat from './Components/Chat'; 
import Navbar from './Components/Navbar';
import Recipe from './Components/Recipe';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Navbar />    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Recipe" element={<Chat />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
