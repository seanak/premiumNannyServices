import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Balloon logic moved here for definitive layering
const colors = ['#add8e6', '#ffb6c1', '#90ee90'];

function getRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomLeft() {
  return Math.floor(Math.random() * 100) + '%';
}

function getRandomDuration() {
  return 12 + Math.random() * 10;
}

function getRandomSize() {
  return Math.floor(40 + Math.random() * 40);
}

function Balloon({ id, onRestart }) {
  const [left, setLeft] = useState(getRandomLeft());
  const [color, setColor] = useState(getRandomValue(colors));
  const [duration, setDuration] = useState(getRandomDuration());
  const [size, setSize] = useState(getRandomSize());

  function handleAnimationEnd() {
    setLeft(getRandomLeft());
    setColor(getRandomValue(colors));
    setDuration(getRandomDuration());
    setSize(getRandomSize());
    onRestart(id);
  }

  return (
    <div
      className="balloon"
      style={{
        left,
        backgroundColor: color,
        width: `${size}px`,
        height: `${size * 1.2}px`,
        animationDuration: `${duration}s`,
        animationTimingFunction: 'linear',
      }}
      onAnimationEnd={handleAnimationEnd}
      key={id}
    />
  );
}

function BalloonContainer() {
  const balloonCount = 7;
  const [balloons, setBalloons] = useState(
    Array.from({ length: balloonCount }, (_, i) => i)
  );

  function handleRestart(id) {
    setBalloons((prev) => [...prev]);
  }

  return (
    <div className="floating-balloons">
      {balloons.map((id) => (
        <Balloon key={id} id={id} onRestart={handleRestart} />
      ))}
    </div>
  );
}

// Render main app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render balloons into their own container
const balloonsRoot = document.getElementById('balloons-root');
if (balloonsRoot) {
  ReactDOM.createRoot(balloonsRoot).render(
    <React.StrictMode>
      <BalloonContainer />
    </React.StrictMode>
  );
}
