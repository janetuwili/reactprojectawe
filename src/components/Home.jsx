import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => position + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    transform: `translateY(${position % 2 === 0 ? 10 : -10}px)`,
    transition: 'transform 1s ease-in-out',
  };

  return (
    <div className='content text-white '>
      <h2 className='pt-5' style={styles}>
        ACADEMY FOR WOMEN ENTREPRENEUR RWANDA
      </h2>
      <p>
        Are you a Rwandan Woman Entrepreneurs willing to be Empowered & Equiped
        with necessary skills
      </p>
      <p>to boost your business? The Academy for Women Entrepreneurs, is here for you.</p>
    </div>
  );
}

export default Home;
