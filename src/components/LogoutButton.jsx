import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';

export default function LogoutButton (){
    return (
        <IconButton sx={{border:1, mr: 0, ml: 2, color:"danger.main"}} >
            <ExitToAppIcon />
        </IconButton>
    )
  }