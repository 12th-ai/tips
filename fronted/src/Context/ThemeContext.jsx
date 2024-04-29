// // ThemeContext.js
// import React, { createContext, useState } from 'react';

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeProvider, ThemeContext };


import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{

    const [theme , setTheme] = useState("light");


const toogleTheme = () =>{
    setTheme((prevTheme) => prevTheme==="light" ? "dark" : "light")
}

return(
    <ThemeContext.Provider value={{theme,toogleTheme}}>
        {children}
    </ThemeContext.Provider>
);
}

export { ThemeProvider, ThemeContext};