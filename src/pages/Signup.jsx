import React, { useState } from 'react'
import { Grid,Typography, Paper, TextField, Container, Button, FormControl, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import app from '../firebase'
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const auth = getAuth(app)

export default function Login () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password ).then(
      (userCredential) => {
        console.log(userCredential)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
    console.log(name, email, password)
  }
  
    return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100vh"
    >
      
      <Paper elevation={4} sx={{ width: '85%', maxWidth: 400, p:3}} >

      <Typography variant="h2" gutterBottom align={'center'} color='secondary.dark' sx={{fontSize: 40, fontWeight: 'bold', mb:2}}>
        Notes App
      </Typography>

        <Typography variant="h3" align='center' sx={{fontSize: 25, fontWeight: 'bold', mb:1, color:'primary.dark'}} >
          Sign Up
        </Typography>

        <FormControl component='form' fullWidth>

          <TextField id="outlined" label="Name" required sx={{my: 2}} fullWidth onChange={(e) => {setName(e.target.value)}}
          />
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2}} fullWidth onChange={(e) => {setEmail(e.target.value)}}
          />
          <TextField required id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth sx={{my: 2}} onChange={(e) => {setPassword(e.target.value)}}
          />        

          <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, fontWeight: 'bold', bgcolor:'primary.dark', color: 'primary'}} onClick={signUp }>Sign Up</Button>

          <Container sx={{display: 'flex', justifyContent:'center', alignItems:'center'}} fullwidth >
            <Typography component='p' sx={{p:0.5}}>
              Have an account?
            </Typography>
            <Link to='/' component={RouterLink}  sx={{color:'background.paper', p:0.5, bgcolor:'primary.main'}} underline="none" >
              Login
            </Link>
          </Container>
        
        </FormControl>

      </Paper>
    </Grid>
    )
  }