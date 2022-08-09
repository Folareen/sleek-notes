import React, { Component } from 'react'
import { Grid, Box, Typography, Paper, TextField, Container, Button, FormControl } from '@mui/material'
// import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100vh" sx={{border: 3, }}
    >

      <Typography variant="h2" gutterBottom align={'center'} color='primary.main'>
        Notes App
      </Typography>

      <Paper elevation={4} sx={{ width: '75%', maxWidth: 450, p:4}} >

        <Typography variant="h3" gutterBottom align='center'>
          Login
        </Typography>

        <FormControl component='form' fullWidth>
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2}} fullWidth 
          />
          <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth sx={{my: 2}}
          />        

          <Button variant="contained" align='center' type='submit' sx={{my: 2, py: 2}}>Login</Button>

          <Container sx={{display: 'flex', border: 1}} fullwidth align='center'>
            <Typography>
              Don't have an account?
            </Typography>
            <Button href='/signup' >
              Signup
            </Button>
          </Container>

        
        </FormControl>


      </Paper>
    </Grid>
    )
  }
}
