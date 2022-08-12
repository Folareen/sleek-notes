import React, { Component } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';

export default class LogoutButton extends Component {
  render() {
    return (
        <IconButton sx={{border:1, mr: 0, ml: 2, color:"danger.main"}} >
            <ExitToAppIcon />
        </IconButton>
    )
  }
}