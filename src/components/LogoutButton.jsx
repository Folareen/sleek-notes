import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';

export default function LogoutButton (){
    return (
        <IconButton sx={{ mr: 0, ml: 2, color:"error.dark", border: 1, borderColor: 'text.primary'}} >
            <ExitToAppIcon />
        </IconButton>
    )
  }