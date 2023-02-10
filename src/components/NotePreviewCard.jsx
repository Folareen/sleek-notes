import React, {useState} from 'react'
import { IconButton, CardActions, CardContent, Card, Button, Typography, Box, CircularProgress} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase'
import useUser from '../hooks/useUser';
import useNotes from '../hooks/useNotes';
import getAllNotes from '../utils/getAllNotes';
import { ACTIONS } from '../reducers/actions';
import { toast } from 'react-toastify';

export default function NotePreviewCard ({id, title, description, date}){
    const { user} = useUser()
    const {dispatch} = useNotes()
    const navigate = useNavigate()
    const [deletingNote, setDeletingNote] = useState(false)
    const viewNote = () => {
        navigate(`/${id}`)
    }
    const opacity = deletingNote ? '0.2' : 1
    
    const deleteNote = async () => {
        setDeletingNote(true)
        try{
            await deleteDoc(doc(db, user.uid, id));
            dispatch({type: ACTIONS.DELETE_NOTE, payload: await getAllNotes(user)})
            toast.info('Noted deleted successfully!')
        }
        catch{
            toast.error('Error!. \n Please try again.')
        }
        finally{
            setDeletingNote(false)
        }

    }


        return (
            <Card sx={{px:2, py:1, position: 'relative'}} elevation={5}>

                {
                    deletingNote &&
                    <Box sx={{bgcolor: 'text.disabled', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, right: 0, left: 0, width: '100%', color: 'error.main'}}>
                        Deleting Note...
                        <CircularProgress color="inherit" />
                    </Box >   

                }

                <CardContent sx={{p:0, opacity:opacity}}>

                    <Typography gutterBottom component="h2" variant='h5' sx={{fontWeight: 'bold',textTransform: 'capitalize', color:'text.primary', borderBottom: 1, borderColor: 'primary.dark', py:1, wordWrap: 'break-word'}} >
                    {title}
                    </Typography>

                    <Typography variant="body" 
                    component='p' sx={{py: 1, color:"text.secondary", fontSize: 20, wordWrap: 'break-word'}}>
                    {description.length > 50 ? `${description.slice(0, 50)}...` : description}
                    </Typography>

                    <Typography variant="p" component='p' sx={{ color:"text.disabled", fontSize: 14}}>
                    Last Updated: {date}
                    </Typography>

                </CardContent>

                <CardActions sx={{display:'flex', justifyContent: 'space-between', borderTop: 0.5, borderColor: 'text.disabled', px:0}}>

                    <Button sx={{fontWeight:'bold'}} color='success' variant='contained' endIcon={<NoteAltIcon/>} onClick={viewNote}>
                        View/Edit
                    </Button>

                    <IconButton  sx={{color:'error.dark', '&:hover': {color:'background.paper', bgcolor:'error.light'
                    } }} onClick={deleteNote}>
                        <DeleteForeverIcon/>         
                    </IconButton>

                </CardActions>
            </Card>
        );        
}