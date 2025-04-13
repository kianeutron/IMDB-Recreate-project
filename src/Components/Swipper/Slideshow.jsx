import React, { useState } from 'react';
import './Slideshow.css'; // Placeholder for CSS

// Import your images
import img1 from '../Images/slidershowpic10.jpg'
import img2 from '../Images/slidershowpic11.jpg'
import img3 from '../Images/slidershowpic3.jpg'
import img4 from '../Images/slidershowpic4.jpg'

const Slideshow = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <button onClick={prevSlide} className="prev">Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      <button onClick={nextSlide} className="next">Next</button>
    </div>
  );
};

export default Slideshow;
