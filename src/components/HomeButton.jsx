import React from 'react'
import { Link} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = () => {
    return (
      <Link to='/' component={RouterLink}  sx={{ color:'background.paper', p:1, borderRadius: 1, bgcolor: 'text.disabled'}} underline="none" >
        <HomeIcon  />
      </Link>
    )
}

export default HomeButton