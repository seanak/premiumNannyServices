import React from 'react';
import './styles.css';
import content from './properties/content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="hero-header">
          <p>Premium Nanny Services</p>
        </div>
        <header className="header">
          <h1 className="site-title">{content.title}</h1>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/gallery" target="_blank" rel="noopener noreferrer">Gallery</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <footer>
          <p>{content.footer}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
