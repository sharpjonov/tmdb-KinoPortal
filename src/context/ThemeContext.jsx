import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")));

  const modeFunction = () => {
    localStorage.setItem("mode", JSON.stringify(!mode));
    setMode(!mode);
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, modeFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
