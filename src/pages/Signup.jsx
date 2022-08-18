import React, { useState, useContext } from 'react'
import { Grid,Typography, Paper, TextField, Container, Button, FormControl, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import {AuthContext } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'
import { useRef } from 'react'

export default function Signup () {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const {setUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const signUp = async (e) =>{
    e.preventDefault()

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value )
      console.log(userCredential)
      setUser(userCredential)
      navigate('/')

      // console.log(userCredential)
      // onAuthStateChanged(auth, (user) => {
      //   if(user){
      //     console.log(user.uid)
      //   }else{
      //     console.log('not signed in')
      //   }
      // })
    }
    catch(error){
      console.log(error)
    }

    console.log('first')


    // onAuthStateChanged()
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

        <FormControl component='form' fullWidth >

          <TextField id="outlined" label="Name" required sx={{my: 2}} fullWidth ref={nameRef}
          />
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2}} fullWidth ref={emailRef}
          />
          <TextField required id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth sx={{my: 2}} ref={passwordRef}
          />        

          <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, fontWeight: 'bold', bgcolor:'primary.dark', color: 'primary'}} onClick={signUp }>Sign Up</Button>

          <Container sx={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
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