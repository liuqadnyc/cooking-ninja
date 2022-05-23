import { createContext, useReducer } from 'react'
import { themeReducer } from '../reducer/themeReducer';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // useReducer just like useState, which is a way to change state
  const [ state, dispatch ] = useReducer(themeReducer, { color: 'blue' });

  const changeColor = (color) => {
    dispatch({ type: 'Change_Color', payload: color });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      { children }
    </ThemeContext.Provider>
  )
}
