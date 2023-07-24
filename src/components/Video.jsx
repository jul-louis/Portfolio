import React, { useRef, useEffect } from 'react';
import video from "../media/video/5.mp4";

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const { width, height } = video.getBoundingClientRect();
    const initialBlurValue = 30; // Adjust the initial blur value as needed

    video.style.setProperty('filter', `blur(${initialBlurValue}px)`);

    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
      const xPos = clientX - left;
      const yPos = clientY - top;
      const blurValue = (1 - xPos / width) * 30; // Adjust the divisor to control the blur intensity
      const bwValue = (1 - xPos / width) * 100;

      video.style.setProperty(
        'filter',
        `blur(${blurValue}px) grayscale(${bwValue}%)`
      );

    };

    video.addEventListener('mousemove', handleMouseMove);

    return () => {
      video.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      id="bgv"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Video;
