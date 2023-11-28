import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './Pages/home';
import DonerPage from './Pages/donerPage';

import Login from './Pages/login'; // Import your Login component
import Signup from './Pages/signup'; // Import your Signup component
import Donation from './Pages/donationPage';

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/doner" element={<DonerPage />} /> {/* Doner page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
          <Route path="/donation" element={<Donation />} /> {/* Signup page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
