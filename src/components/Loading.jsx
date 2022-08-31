import React from 'react'
import { Grid } from  'react-loader-spinner'
import { Box} from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{
      height: '100vh',
      bgcolor: 'grey.300',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'fixed',
      bottom: 0,
    }}>
      <Grid
      height = "80"
      width = "80"
      radius = "9"
      color = 'blue'
      ariaLabel = 'text-editor loading'
    />
    </Box>

  )
}

export default Loading