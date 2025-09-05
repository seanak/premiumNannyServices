import React, { useState, useEffect } from 'react';
import './styles.css';

const images = [
  '/images/image.jpg',
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
];

const allImages = ['/images/nanny-hero.jpg', ...images];

const HeroSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageHeights, setImageHeights] = useState({});

  useEffect(() => {
    const imagePromises = allImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          resolve({ src, height: 700 * aspectRatio });
        };
      });
    });

    Promise.all(imagePromises).then((imageData) => {
      const heights = imageData.reduce((acc, item) => {
        acc[item.src] = item.height;
        return acc;
      }, {});
      setImageHeights(heights);
    });

    const initialTimeout = setTimeout(() => {
      setActiveIndex(1);
    }, 30000); // Show first image for 30s

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (activeIndex === 0) return; // Don't start interval until after initial image

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % allImages.length || 1);
    }, 5000); // Cycle every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const containerHeight = imageHeights[allImages[activeIndex]] || 'auto';

  return (
    <div className="slideshow-container" style={{ height: containerHeight }}>
      {allImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Nanny with children"
          className={`hero-image ${index === activeIndex ? 'active' : ''}`}
          style={{
            animation: index === activeIndex ? `kenburns-effect ${index === 0 ? '30s' : '5s'} ease-out forwards` : 'none'
          }}
        />
      ))}
    </div>
  );

};

export default HeroSlideshow;
