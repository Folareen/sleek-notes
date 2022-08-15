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
        sx={{ ml: 1 }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
  )
}

export default ColorModeButton