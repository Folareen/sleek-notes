import React, {useState} from 'react'
import { Grid,Typography, Paper, TextField, Container, Button, FormControl, Link, CircularProgress,Box, Alert, IconButton, InputBase } from '@mui/material'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import {auth} from '../firebase'
import { signInWithEmailAndPassword} from 'firebase/auth'
import useUser from '../hooks/useUser'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const {setUser, setLoading} = useUser()
  const navigate = useNavigate()

  


  const login = async (e) =>{
    e.preventDefault()
    setError(false)
    setLoginLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password )
      setLoading(true)
      navigate('/')
      setUser(userCredential)
    }
    catch{
      setError(true)
    }
    finally{
      setLoginLoading(false)
    }
  }

    return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100vh"
    >

      <Paper elevation={4} sx={{ width: '85%', maxWidth: 400, p:3, position: 'relative'}} >

        {
        error &&
        <Alert elevation={3} onClose={() => {setError(false)}} sx={{position: 'absolute', top: '-50px', right: 0, left: 0}} severity='error'>Invalid Email or Password!</Alert> 
        }

        <Typography variant="h2" gutterBottom align={'center'} color='secondary.dark' sx={{fontSize: 40, fontWeight: 'bold', mb:2}}>
          Text Editor
        </Typography>

        <Typography variant="h3" align='center' sx={{fontSize: 25, fontWeight: 'bold', mb:1, color:'primary.dark'}} >
          Login
        </Typography>

        <FormControl component='form' fullWidth>
          <TextField required id="outlined-required" label="Email Address" sx={{my: 2 }} fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />

          <Box sx={{display: 'flex', borderRadius: 1, p:0.9, borderWidth: passwordFocus ? 2 : 1, borderStyle: 'solid', borderColor : passwordFocus ? 'primary.main' :'text.disabled' }} >
            <InputBase  required id="outlined-password-input" placeholder="Password *" type={passwordVisibility ? "text" : "password" } autoComplete="current-password" fullWidth sx={{flex: 1, px:1}} value={password} onChange={(e)=>{setPassword(e.target.value)}} onFocus={()=>{setPasswordFocus(true)}} onBlur={()=>{setPasswordFocus(false)}}/>
            <IconButton sx={{width: 'max-content', height: 'max-content'}} onClick={()=>{setPasswordVisibility(!passwordVisibility)}}>
              {passwordVisibility? <VisibilityOffRoundedIcon/> : <VisibilityRoundedIcon/>}
            </IconButton>  
          </Box>
      

          <Box sx={{position: 'relative'}}>

            <Button variant="contained"  align='center' type='submit' sx={{my: 2, py: 2, fontWeight: 'bold', bgcolor:'primary.dark', color: 'primary'}} onClick={login} disabled={loginLoading} fullWidth>Login</Button>

            {loginLoading && (
              <CircularProgress
                size={24}
                sx={{color: 'success.main',position: 'absolute',top: '50%',left: '50%',marginTop: '-12px',marginLeft: '-12px',
                }}
            />
            )}

          </Box>



          <Container sx={{display: 'flex', justifyContent:'center', alignItems:'center'}} >
            <Typography component='p' sx={{p:0.5, textAlign: 'center'}}>
              Don't have an account?
            </Typography>
            <Link to='/signup' component={RouterLink}  sx={{color:'background.paper', p:0.5, bgcolor:'primary.main', borderRadius: 1}} underline="none" >
              Signup
            </Link>
          </Container>
        
        </FormControl>

      </Paper>
    </Grid>
    )
  }