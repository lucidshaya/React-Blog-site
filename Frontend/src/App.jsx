import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import LandingPage from './Components/LandingPage';



const App = () => {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
};

export default App;