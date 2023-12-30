import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './Pages/home';
import DonerPage from './Pages/donerPage';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Donation from './Pages/donationPage';
import Accepter from './Pages/accepterPage';
import VolunteerPage from './Pages/volunteer';

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doner" element={<DonerPage />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/accepter" element={<Accepter/>} />
          <Route path='/volunteer' element={<VolunteerPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
