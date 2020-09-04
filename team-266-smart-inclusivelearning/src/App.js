import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import settings from './settings.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './Nav.css';
import './Footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={settings} className="App-logo" alt="settings" />
        <p>
          Site Under Construction please be on the look out for Updates.
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
