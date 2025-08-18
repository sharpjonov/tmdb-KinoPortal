import { useState } from "react";
import { createContext } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem("en")));

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
