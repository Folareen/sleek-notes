import React from 'react'
import { Link} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = () => {
    return (
      <Link to='/' component={RouterLink}  sx={{ color:'background.paper', py:1, px:2, borderRadius: 1, bgcolor: 'text.disabled', textAlign: 'center'}} underline="none" >
        <HomeIcon  />
      </Link>
    )
}

export default HomeButton