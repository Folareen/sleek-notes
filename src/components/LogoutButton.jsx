import React from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { IconButton } from '@mui/material';

export default function LogoutButton (){
    return (
        <IconButton sx={{ mr: 0, ml: 2, color:"error.dark", border: 1, bgolor: 'error.dark'}} >
            <LogoutRoundedIcon />
        </IconButton>
    )
  }