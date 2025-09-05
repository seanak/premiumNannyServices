import React from 'react';
import './styles.css';

const images = [
  '/images/nanny-hero.jpg',
  '/images/image.jpg',
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Our Gallery</h1>
      <p>A collection of moments with our wonderful families.</p>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
