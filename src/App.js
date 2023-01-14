import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Review from './components/pages/Review';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/review" element={<Review />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
