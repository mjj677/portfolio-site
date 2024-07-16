import React, {createContext, useContext, useEffect, useState} from React

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const themeProvider = ({children}) => {
  
}