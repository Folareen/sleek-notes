import { createContext, useState } from "react";

const themeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [darkThemeMode, setDarkThemeMode] = useState(false);

  return (
    <themeContext.Provider value={{ darkThemeMode, setDarkThemeMode }}>
      {children}
    </themeContext.Provider>
  );
};

export default themeContext;
