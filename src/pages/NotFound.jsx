import React from 'react'
import { Box, Typography} from '@mui/material'
import HomeButton from '../components/HomeButton'

const NotFound = () => {
  return (
    <Box sx={{display: 'grid', placeContent:'center', height: '100vh', bgcolor: 'gray.200'}}>
        <Typography component='h4' variant='body' sx={{color: 'error.dark', my: 2}}>
            Error!...
            Page not found.
        </Typography>
        <HomeButton />
    </Box>
  )
}

export default NotFound