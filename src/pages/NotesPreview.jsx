import React, { useEffect, useState} from 'react'
import { AppBar, Box, Toolbar, IconButton, InputBase, Grid, Typography, Button,Dialog, DialogTitle, DialogActions, DialogContent,TextField, Alert, Slide, Skeleton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotePreviewCard from '../components/NotePreviewCard';
import LogoutButton from '../components/LogoutButton';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import ColorModeButton from '../components/ColorModeButton'
import { db } from '../firebase'
import {doc, setDoc} from "firebase/firestore";
import useNotes from '../hooks/useNotes';
import useUser from '../hooks/useUser';
import getAllNotes from '../utils/getAllNotes';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from 'react-router-dom';
import displayDateAndTime from '../utils/displayDateAndTIme'
import { ACTIONS } from '../reducers/actions';

export default function NotesPreview () {
    const { user} = useUser()
    const [displayedNotes, setDisplayedNotes] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteDescription, setNewNoteDescription] = useState('')
    const [newNoteCreating, setNewNoteCreating] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const {dispatch, fetchingNotes, notes, error, deletedNote} = useNotes()

    const addNewNote = async (e) =>{
        e.preventDefault()
        setNewNoteCreating(true)

        const newNoteId = Date.now()

        await setDoc(doc(db, user.uid, `${newNoteId}`), {
            title: newNoteTitle,
            description: newNoteDescription,
            body: '',
            date: displayDateAndTime()
        });
        dispatch({type: ACTIONS.CREATE_NEW_NOTE, payload: await getAllNotes(user)})
        setShowModal(false)
        setNewNoteCreating(false)
        navigate(`/${newNoteId}`)
    }

    const showAddNewNoteModal = () =>{
        setShowModal(true)
        setNewNoteTitle('')
        setNewNoteDescription('')
    }

    const searchNotes = () => {
        if(searchValue.length < 1){
            setDisplayedNotes(notes)
        }else{
            setDisplayedNotes(
                notes.filter((note) => {
                    return note.data.title.toLowerCase().includes(searchValue)
                }
                )
            )
        }
    }

    useEffect(
        ()=> {
            setDisplayedNotes(notes)
        }, [notes]
    )


    return (
    <Box >
        <AppBar position="sticky" sx={{color:'text.primary', py: 0.5, bgcolor: '#2a5497'}} elevation={10}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >

                <Box sx={{flex: 1, border:1,borderRadius: 10, display:'flex', p: 0.8}}>
                    <InputBase
                        sx={{ flex: 1,px:1, color: 'text.primary', fontSize: { xs: 16, md: 20}}}
                        placeholder="Search Note with title"
                        inputProps={{ 'aria-label': 'search Note' }}
                        type='search'
                        value={searchValue}
                        onChange={(e)=>{setSearchValue(e.target.value)}}
                        onKeyUp={searchNotes}
                    />  
                    <SearchIcon sx={{alignSelf: 'center'}}  size='large'/>         
                </Box>

                <ColorModeButton />
                
                <LogoutButton/>

            </Toolbar>
        </AppBar>

        {
            deletedNote &&
            <Slide direction="left" in={deletedNote} mountOnEnter unmountOnExit>
                <Alert elevation={3} onClose={() => {dispatch({type: ACTIONS.CLOSE_DELETION_ALERT}) }} sx={{position: 'absolute', top: '80px', right: 0}} severity='error'>Note deleted!</Alert>
            </Slide>

        }
         
        {
        !fetchingNotes &&
        <Typography component='p' sx={{textAlign: 'center',p: 1, color: 'primary.main', fontSize: 30 }} >
            Welcome, <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
            {
                user  && user.displayName
            }
            </span>.
        </Typography>
        }

        {
            fetchingNotes &&
            <Box sx={{display: 'flex', flexDirection: 'column', position: 'fixed',  top: 40, bottom: 0, right: 0, left: 0, zIndex: 2, height: '100vh', p: 2}}>
                <Skeleton animation="wave" variant='rectangular' height={60} sx={{my: 2}}/>
                <Skeleton animation="wave" variant='rectangular' height={'80vh'} />
            </Box>                         

        }

        {
            !fetchingNotes && 
            <Grid container spacing={3} sx={{p:2}}>
                {displayedNotes &&
                    displayedNotes?.map(
                        ({id, data}) => {
                            const {title, description, date} = data
                            return <Grid item xs={12} sm={6} md={4} xxl={2} key={id}>
                            <NotePreviewCard id={id} title={title} description={description} date={date}/>
                            </Grid>
                        }
                    )
                }
            </Grid>
        }


        {   
            error &&
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, textAlign: 'center'}}>
                <Typography component='p' sx={{color: 'error.dark'}}>
                    No Notes found..<br />
                    Add a Note with the green button at the bottom left corner.
                </Typography>
            </Box>
        }




        <Dialog
                onClose={()=>{setShowModal(false)}}
                aria-labelledby="Create new Note modal"
                open={showModal}
            >
        <DialogTitle id="New Note title" onClose={()=>{setShowModal(false)}}>
          Create new Note
            <IconButton
            aria-label="close"
            onClick={()=>{setShowModal(false)}}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseRoundedIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField id="outlined" label="Title" required sx={{my: 2}} fullWidth onChange={(e) => {setNewNoteTitle(e.target.value)}} value={newNoteTitle}
          />
          <TextField id="outlined" label="Description" required sx={{my: 2}} fullWidth onChange={(e) => {setNewNoteDescription(e.target.value)}} value={newNoteDescription} multiline rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit' onClick={addNewNote} color='success' variant='contained' disabled={newNoteCreating}>
            {newNoteCreating ? 'Creating..' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

        <IconButton elevation={5} sx={{boxShadow: 10, border: 1, p: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', position: 'fixed', bottom: 10, right: 10, bgcolor: 'background.paper', '&:hover': {bgcolor: 'success.light'}}} 
            color='success' onClick={showAddNewNoteModal} size='large'>
            <NoteAddRoundedIcon sx={{fontSize: {xs: 30, lg: 50}}}/>
        </IconButton>

    </Box>

  );
  }