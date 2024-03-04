import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      isDarkMode
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === "undefined")
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
