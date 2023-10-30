import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './Pages/home';
import DonerPage from './Pages/donerPage';
import Login from './Pages/login'; // Import your Login component
import Signup from './Pages/signup'; // Import your Signup component

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/doner" element={<DonerPage />} /> {/* Doner page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
