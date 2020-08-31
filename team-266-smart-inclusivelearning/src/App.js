import React from 'react';
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site Under Construction please be on the look out for Updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
