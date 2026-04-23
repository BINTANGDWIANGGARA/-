import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      if (outlineRef.current) {
        outlineRef.current.animate(
          {
            left: `${x}px`,
            top: `${y}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

    const onMouseEnter = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width = '60px';
        outlineRef.current.style.height = '60px';
        outlineRef.current.style.backgroundColor = 'rgba(168, 85, 247, 0.15)';
      }
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    };

    const onMouseLeave = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width = '40px';
        outlineRef.current.style.height = '40px';
        outlineRef.current.style.backgroundColor = 'transparent';
      }
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', onMouseMove);

      const clickables = document.querySelectorAll('a, button, input, textarea, .glass-card, .tilt-element');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        clickables.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    }
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block"></div>
      <div ref={outlineRef} className="cursor-outline hidden md:block"></div>
    </>
  );
};

export default Cursor;
