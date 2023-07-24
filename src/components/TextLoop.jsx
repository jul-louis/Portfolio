import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear } from 'gsap';

function RollingText() {
  const wrapRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const $text = textRef.current;
    const $wrap = wrapRef.current;

    const cloneText = $text.cloneNode(true);
    $wrap.appendChild(cloneText);

    TweenMax.to($wrap, 10, {
      x: -($text.offsetWidth),
      ease: Linear.easeNone,
      repeat: -1
    });

    return () => {
      TweenMax.killTweensOf($wrap);
    };
  }, []);

  const wrapperStyle = {
    whiteSpace: 'nowrap',
    fontFamily: 'Playfair Display, serif',
    marginTop: '1vw'
  };

  const textStyle = {
    fontSize: '5.5vw',
    display: 'inline-block'
  };

  return (
    <div className="rolling-text fixed bottom-0">
      <div className="rolling-text__wrap" ref={wrapRef} style={wrapperStyle}>
        <div className="rolling-text__text text-light" ref={textRef} style={textStyle}>
            oftware Development Engineer - Game Developer - Full Stack Developer - Software Development Engineer - Game Developer - Full Stack Developer - S
        </div>
        
      </div>
    </div>
  );
}

export default RollingText;
