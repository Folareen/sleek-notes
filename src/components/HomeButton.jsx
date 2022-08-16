import React from 'react'
import { Link} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = () => {
    return (
      <Link to='/' component={RouterLink}  sx={{ color:'background.paper', px:4}} underline="none" >
        <HomeIcon sx={{fontSize: 36}} />
      </Link>
    )
}

export default HomeButton