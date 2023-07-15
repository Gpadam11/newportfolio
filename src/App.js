import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import RoutesModule from './Routes/RoutesModule';


const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorScale, setCursorScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  let timeout;

  const handleScroll = () => {
    clearTimeout(timeout);
    setCursorScale(2);

    timeout = setTimeout(() => {
      setCursorScale(1);
    }, 100);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <div className="cursor" style={{ left: cursorPos.x + 'px', top: cursorPos.y + 'px', transform: `translate(-50%, -50%) scale(${cursorScale})` }}></div>
      <NavigationBar />
      <RoutesModule></RoutesModule>
    </>
  );
};

export default App;
