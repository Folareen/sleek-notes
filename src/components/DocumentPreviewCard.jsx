import React, { useContext } from 'react'
import { IconButton, CardActions, CardContent, Card, Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase'
import { AuthContext} from '../context/AuthContext'

export default function DocumentPreviewCard ({id, title, body, date}){
    const { user} = useContext(AuthContext)
    const navigate = useNavigate()
    const viewDocument = () => {
        navigate(`/${id}`)
    }
    
    const deleteDocument = async () => {
        await deleteDoc(doc(db, user.uid, id));
        alert('deleted!')
    }


        return (
            <Card sx={{px:2, py:1}} elevation={5}>

                <CardContent sx={{p:0}}>

                    <Typography gutterBottom component="h2" variant='h5' sx={{fontWeight: 'bold',textTransform: 'capitalize', color:'text.primary', borderBottom: 1, borderColor: 'primary', py:1}} >
                    {title} id:{id}
                    </Typography>

                    <Typography variant="p" 
                    component='p' sx={{py: 1, color:"text.secondary"}}>
                    {body}
                    </Typography>

                    <Typography variant="body" component='p' sx={{fontStyle: 'italic', fontWeight: 'light', color:"text.disabled"}}>
                    Last Updated: {date}
                    </Typography>

                </CardContent>

                <CardActions sx={{display:'flex', justifyContent: 'space-between', borderTop: 1, borderColor: 'primary.light', px:0}}>

                    <Button sx={{fontWeight:'bold'}} color='success' variant='contained' endIcon={<NoteAltIcon/>} onClick={viewDocument}>
                        View/Edit
                    </Button>

                    <IconButton  sx={{color:'error.dark', bgcolor:'error.light', '&:hover': {color:'error.light', bgcolor:'error.dark'
                    } }} onClick={deleteDocument}>
                        <DeleteForeverIcon/>         
                    </IconButton>

                </CardActions>
            </Card>
        );        
}