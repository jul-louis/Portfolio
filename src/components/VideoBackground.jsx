import React, { useRef, useEffect } from 'react';
import image from "../media/images/1121.png";

function VideoBackground() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const { width, height } = image.getBoundingClientRect();
    const initialBlurValue = 40;

    image.style.setProperty('filter', `blur(${initialBlurValue}px)`);

    const handleMouseMove = (e) => {
      const { clientX, target } = e;
      const { left, width } = target.getBoundingClientRect();
      const xPos = clientX - left;
      const distanceFromCenter = Math.abs(xPos - width / 2);
      const maxDistance = width / 2;
      const blurValue = (distanceFromCenter / maxDistance) * 30; 
      const bwValue = (distanceFromCenter / maxDistance) * 100;
    
      image.style.setProperty('filter', `blur(${blurValue}px) grayscale(${bwValue}%)`);
    };

    image.addEventListener('mousemove', handleMouseMove);

    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: '200px', height: '150px' }}>
      <img
        ref={imageRef}
        src={image}
        alt="Background Image"
        id="bgv"
        // className="hidden"
        style={{ maxWidth: '70%', maxHeight: '70%', minWidth:'30vw', minHeight:'30vh', objectFit: 'scale-down' }}
      />
    </div>
  );
}

export default VideoBackground;
