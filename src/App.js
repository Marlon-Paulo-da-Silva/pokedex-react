import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

import backgroundImage from './assets/pokeball-pattern.png';

function App() {


  return (
    <div className="App" style={{background: `url(${backgroundImage})`}}>
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  )
}

export default App;
