import React, {useContext} from 'react'
import { ColorModeContext } from '../context/ColorModeContext'
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

const ColorModeButton = () => {

  const {mode, setMode} = useContext(ColorModeContext)

  const toggleColorMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }else{
      setMode('light')
    }
  }


  return (
      <IconButton
        sx={{ ml: 1, bgcolor: 'text.secondary', color: 'background.default',boxShadow:2 }}
        onClick={toggleColorMode}
      >
        {mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
  )
}

export default ColorModeButton