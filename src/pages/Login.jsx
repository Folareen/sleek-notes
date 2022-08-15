import React from 'react'
import { Grid,Typography, Paper, TextField, Container, Button, FormControl, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

export default function Login () {
    return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100vh"
    >

      <Paper elevation={4} sx={{ width: '85%', maxWidth: 400, p:3}} >
        <Typography variant="h2" gutterBottom align={'center'} color='secondary.dark' sx={{fontSize: 40, fontWeight: 'bold', mb:2}}>
          Notes App
        </Typography>

        <Typography variant="h3" align='center' sx={{fontSize: 25, fontWeight: 'bold', mb:1, color:'primary.dark'}} >
          Login
        </Typography>

        <FormControl component='form' fullWidth>
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2 }} fullWidth 
          />
          <TextField required id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth sx={{my: 2}}
          />        

          <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, fontWeight: 'bold', bgcolor:'primary.dark', color: 'primary'}} >Login</Button>


          <Container sx={{display: 'flex', justifyContent:'center', alignItems:'center'}} fullwidth >
            <Typography component='p' sx={{p:0.5}}>
              Don't have an account?
            </Typography>
            <Link to='/signup' component={RouterLink}  sx={{color:'background.paper', p:0.5, bgcolor:'primary.main'}} underline="none" >
              Signup
            </Link>
          </Container>
        
        </FormControl>

      </Paper>
    </Grid>
    )
  }