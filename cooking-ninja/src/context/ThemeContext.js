import { createContext, useReducer } from 'react'
import { themeReducer } from '../reducer/themeReducer';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // useReducer just like useState, which is a way to change state
  const [ state, dispatch ] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'light',
  });

  const changeColor = (color) => {
    dispatch({ type: 'Change_Color', payload: color });
  }

  const changeMode = (mode) => {
    dispatch({ type: 'Change_Mode', payload: mode });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      { children }
    </ThemeContext.Provider>
  )
}
