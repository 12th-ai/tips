// App.js
import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import Header from './Component/ Header';
import Content from './Component/ Content';


const App = () => {
  return (
    <div>
    <ThemeProvider>
      <Header/>
      <Content />
  
  
    </ThemeProvider>
  
    </div>
  );
};

export default App;
