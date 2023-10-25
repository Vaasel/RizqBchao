import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Layout/header';
import Footer from "./Layout/footer";
import Home from './Pages/home';
import Login from './Pages/login'; // Import your Login component
import Signup from './Pages/signup'; // Import your Signup component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
