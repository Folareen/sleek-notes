import React, {useState} from 'react'
import { IconButton, CardActions, CardContent, Card, Button, Typography, Box, CircularProgress} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase'
import useUser from '../hooks/useUser';
import useDocuments from '../hooks/useDocuments';
import getAllDocuments from '../utils/getAllDocuments';
import { ACTIONS } from '../reducers/actions';

export default function DocumentPreviewCard ({id, title, description, date}){
    const { user} = useUser()
    const {dispatch} = useDocuments()
    const navigate = useNavigate()
    const [deletingDocument, setDeletingDocument] = useState(false)
    const viewDocument = () => {
        navigate(`/${id}`)
    }
    const opacity = deletingDocument ? '0.5' : 1
    
    const deleteDocument = async () => {
        setDeletingDocument(true)
        try{
            await deleteDoc(doc(db, user.uid, id));
            dispatch({type: ACTIONS.DELETE_DOC, payload: await getAllDocuments(user)})
            dispatch({type: ACTIONS.DELETED_DOC})
        }
        catch{
            console.log('error')
        }
        finally{
            setDeletingDocument(false)
        }

    }


        return (
            <Card sx={{px:2, py:1, position: 'relative'}} elevation={5}>

                {
                    deletingDocument &&
                    <Box sx={{bgcolor: 'text.disabled', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, right: 0, left: 0, width: '100%', color: 'error.main'}}>
                        Deleting Document...
                        <CircularProgress color="inherit" />
                    </Box >   

                }

                <CardContent sx={{p:0, opacity:opacity}}>

                    <Typography gutterBottom component="h2" variant='h5' sx={{fontWeight: 'bold',textTransform: 'capitalize', color:'text.primary', borderBottom: 1, borderColor: 'primary.dark', py:1, wordWrap: 'break-word'}} >
                    {title}
                    </Typography>

                    <Typography variant="body" 
                    component='p' sx={{py: 1, color:"text.secondary", fontSize: 20, wordWrap: 'break-word'}}>
                    {description}
                    </Typography>

                    <Typography variant="p" component='p' sx={{ fontWeight: 'light', color:"text.disabled", fontSize: 14}}>
                    Last Updated: {date}
                    </Typography>

                </CardContent>

                <CardActions sx={{display:'flex', justifyContent: 'space-between', borderTop: 0.5, borderColor: 'text.disabled', px:0}}>

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