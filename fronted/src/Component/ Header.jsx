import React, { useContext } from 'react';
// import { ThemeContext } from '../Context/ThemeContext';
import { ThemeContext } from '../Context/ThemeContext';

import '../App.css';

const Header = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);


  return (
    <header className={`header ${theme === 'dark' ? 'header-dark' : ''}`}>
      <h1 className="title">Theme Toggler</h1>
    
      <button onClick={toogleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
