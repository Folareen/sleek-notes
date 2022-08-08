import React, { Component } from 'react'
import { Grid, Box, Typography, Paper, TextField, Container, Button, FormControl } from '@mui/material'

export default class Login extends Component {
  render() {
    return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{border: 1}}
    >

      <Typography variant="h2" gutterBottom align={'center'}>
        Notes App
      </Typography>

      <Paper elevation={4} sx={{ width: '75%', maxWidth: 500}} >
      <Typography variant="h3" gutterBottom align='center'>
        Login
      </Typography>

      <Container sx={{border:1, my:3}} align='center'>
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          sx={{mx:'auto'}}
        />
      </Container>
      <Container sx={{border:1, my:3}} align='center'>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Container>
      <Button variant="contained" align='center' type='submit'>Login</Button>

      <FormControl>
        form
      </FormControl>


      </Paper>
    </Grid>
    )
  }
}
