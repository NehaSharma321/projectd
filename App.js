
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Home from './components/Home';
import Prevention from './components/Prevention';
import News from './components/News';
import Donation from './components/Donation';
import Help from './components/Help';
import Login from './components/Login';
import Chatbot from './components/Chatbot';
import DisasterDetail from './components/Disaster-detail';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Chatbot />
        <main className="content-section">
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/prevention" component={Prevention} />
            <Route path="/news" component={News} />
            <Route path="/donation" component={Donation} />
            <Route path="/help" component={Help} />
            <Route path="/login" component={<Login />} />
            <Route path="/prevention-resources/:id" component={DisasterDetail} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
