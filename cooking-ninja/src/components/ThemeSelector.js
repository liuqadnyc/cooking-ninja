import styled from "styled-components"
import { ThemeContext } from "../context/ThemeContext"
import { useEnhancedContext } from "../hooks/useEnhancedContext"
import modeIcon from "../assets/mode_icon.svg"

const Selector = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto;
  .theme-buttons div {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 15px;
    border-radius: 50%;
  }
  .mode-toggle {
    margin-right: auto;
  }
  .mode-toggle img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`

const themeColors = ['#58249c', '#249c6b', '#b70233']

export const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useEnhancedContext(ThemeContext)

  const toggleMode = () => {
    changeMode( mode === 'dark'? 'light' : 'dark')
  }

  return (
    <Selector>
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          onClick={toggleMode}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </Selector>
  )
}
