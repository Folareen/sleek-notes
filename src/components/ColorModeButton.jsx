import React, {useContext} from 'react'
import { ColorModeContext } from '../context/ColorModeContext'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
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
        sx={{ ml: 1, bgcolor: 'text.secondary', color: 'background.default',boxShadow:2, border: 1, borderColor: 'background.paper' }}
        onClick={toggleColorMode}
      >
        {mode === "dark" ? (
          <DarkModeRoundedIcon />
        ) : (
          <LightModeRoundedIcon/>
        )}
      </IconButton>
  )
}

export default ColorModeButton