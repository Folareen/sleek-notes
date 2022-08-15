import React, {useContext} from 'react'
import { ColorThemeContext } from '../context/themeContext'

const ColorModeButton = () => {

    const { darkThemeMode, setDarkThemeMode} = useContext(ColorThemeContext)


  return (
    <button onClick={() => {setDarkThemeMode(!darkThemeMode)}}>
        change
    </button>
  )
}

export default ColorModeButton