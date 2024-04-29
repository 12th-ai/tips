// Content.js
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0', padding: '1rem' }}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper libero eu augue convallis, sed sollicitudin lorem condimentum.</p>
    </div>
  );
};

export default Content;
