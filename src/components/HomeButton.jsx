import React from 'react'
import { Link} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = () => {
    return (
      <Link to='/' component={RouterLink}  sx={{ color:'background.paper', py:0.95, px:2, borderRadius: 1, bgcolor: 'text.disabled', textAlign: 'center'}} underline="none" >
        <HomeIcon sx={{fontSize: 24}} />
      </Link>
    )
}

export default HomeButton