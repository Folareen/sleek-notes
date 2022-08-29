import React from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth} from '../firebase'
import useUser from '../hooks/useUser';
import {useNavigate} from 'react-router-dom'

export default function LogoutButton (){
    const { setUser} = useUser()
    const navigate = useNavigate()

    const logout = async () => {

        try{
            await signOut(auth)
            setUser(null)
            navigate('/') 
            console.log('out')   
        }
        catch{
            alert('failed to sign out!')
        }
    }


    return (
        <IconButton sx={{ mr: 0, ml: 2, color:"error.dark", border: 1, bgolor: 'error.dark'}} onClick={logout} >
            <LogoutRoundedIcon />
        </IconButton>
    )
  }