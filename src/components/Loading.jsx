import React from 'react'
import { Grid } from  'react-loader-spinner'
import { Box} from '@mui/material'

const Loading = ({small}) => {
  return (
    <Box sx={{
      height: small? '100vh' : '70vh',
      bgcolor: 'grey.300',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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