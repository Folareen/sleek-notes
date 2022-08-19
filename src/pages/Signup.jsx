import React, { useState, useContext} from 'react'
import { Grid,Typography, Paper, TextField, Container, Button, FormControl, Link, CircularProgress,Box, Alert  } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {AuthContext } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'

export default function Signup () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const {setUser} = useContext(AuthContext)
  const navigate = useNavigate()


  const signUp = async (e) =>{
    e.preventDefault()
    setError(false)
    setLoading(true)

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password )
        setUser(userCredential)
        await updateProfile(auth.currentUser, {
        displayName: name})
        navigate('/')
    }
    catch{
      setError(true)
    }
    finally{
      setLoading(false)
    }
  }
 
    return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100vh"
    >
      
      <Paper elevation={4} sx={{ width: '85%', maxWidth: 400, p:3, position: 'relative'}} >

    {
    error &&
    <Alert elevation={3} onClose={() => {setError(false)}} sx={{position: 'absolute', top: '-50px', right: 0, left: 0}} severity='error'>Sign up failed!</Alert> 
    }

      <Typography variant="h2" gutterBottom align={'center'} color='secondary.dark' sx={{fontSize: 40, fontWeight: 'bold', mb:2}}>
        Text Editor
      </Typography>

        <Typography variant="h3" align='center' sx={{fontSize: 25, fontWeight: 'bold', mb:1, color:'primary.dark'}} >
          Sign Up 
        </Typography>

        <FormControl component='form' fullWidth >

          <TextField id="outlined" label="Name" required sx={{my: 2}} fullWidth onChange={(e) => {setName(e.target.value)}} value={name}
          />
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2}} fullWidth onChange={(e) => {setEmail(e.target.value)}} value={email}
          />
          <TextField required id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth sx={{my: 2}} onChange={(e) => {setPassword(e.target.value)}} value={password}
          />

          <Box sx={{position: 'relative'}}>

            <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, fontWeight: 'bold', bgcolor:'primary.dark', color: 'primary'}} onClick={signUp } disabled={loading} fullWidth>Sign Up</Button>

            {loading && (
              <CircularProgress
                size={24}
                sx={{color: 'success.main',position: 'absolute',top: '50%',left: '50%',marginTop: '-12px',marginLeft: '-12px',
                }}
            />
            )}

          </Box>        

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