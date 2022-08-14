import React from 'react'
import { Link} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const HomeButton = () => {
    return (
            <Link to='/' component={RouterLink}  sx={{ color:'light.main', px: 4}} underline="none" >
              <HomeIcon />
            </Link>
    )
}

export default HomeButton