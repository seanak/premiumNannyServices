import React from 'react';
import './styles.css';
import content from './properties/content';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="hero-header">
          <p>Premium Nanny Services — Tbilisi Georgia</p>
        </div>
        <header className="header">
          <h1 className="site-title">{content.title}</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
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
