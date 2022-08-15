import { createContext, useState } from "react";

export const ColorThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkThemeMode, setDarkThemeMode] = useState(true);

  return (
    <ColorThemeContext.Provider value={{ darkThemeMode, setDarkThemeMode }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ThemeContextProvider;
