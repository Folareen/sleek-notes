import React, { useEffect, useState} from 'react'
import { AppBar, Box, Toolbar, IconButton, InputBase, Grid, Typography, Button,Dialog, DialogTitle, DialogActions, DialogContent,TextField, Alert, Slide } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DocumentPreviewCard from '../components/DocumentPreviewCard';
import LogoutButton from '../components/LogoutButton';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import ColorModeButton from '../components/ColorModeButton'
import { db } from '../firebase'
import {doc, setDoc} from "firebase/firestore";
import useDocuments from '../hooks/useDocuments';
import useUser from '../hooks/useUser';
import getAllDocuments from '../utils/getAllDocuments';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from 'react-router-dom';
import displayDateAndTime from '../utils/displayDateAndTIme'
import Loading from '../components/Loading';
import { ACTIONS } from '../reducers/actions';


export default function DocumentsPreview () {
    const { user} = useUser()
    const [displayedDocuments, setDisplayedDocuments] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [newDocTitle, setNewDocTitle] = useState('');
    const [newDocDescription, setNewDocDescription] = useState('')
    const [newDocCreating, setNewDocCreating] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const {dispatch, fetchingDocs, documents, error, deletedDocument} = useDocuments()

    const addNewDoc = async (e) =>{
        e.preventDefault()
        setNewDocCreating(true)

        const newDocId = Date.now()

        await setDoc(doc(db, user.uid, `${newDocId}`), {
            title: newDocTitle,
            description: newDocDescription,
            date: displayDateAndTime()
        });
        dispatch({type: ACTIONS.CREATE_NEW_DOC, payload: await getAllDocuments(user)})
        setShowModal(false)
        setNewDocCreating(false)
        navigate(`/${newDocId}`)
    }

    const showAddNewDocumentModal = () =>{
        setShowModal(true)
        setNewDocTitle('')
        setNewDocDescription('')
    }

    const searchDocuments = () => {
        if(searchValue.length < 1){
            setDisplayedDocuments(documents)
        }else{
            setDisplayedDocuments(
                documents.filter((doc) => {
                    return doc.data.title.includes(searchValue)
                }
                )
            )
        }
    }

    useEffect(
        ()=> {
            setDisplayedDocuments(documents)
        }, [documents]
    )


    return (
    <Box >
        <AppBar position="sticky" sx={{color:'text.primary', py: 0.5}} elevation={10}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >

                <Box sx={{flex: 1, border:1,borderRadius: 10, display:'flex', p: 0.8}}>
                    <InputBase
                        sx={{ flex: 1,px:1, color: 'text.primary', fontSize: { xs: 16, md: 20}}}
                        placeholder="Search Document with title"
                        inputProps={{ 'aria-label': 'search Document' }}
                        type='search'
                        value={searchValue}
                        onChange={(e)=>{setSearchValue(e.target.value)}}
                        onKeyUp={searchDocuments}
                    />  
                    <SearchIcon sx={{alignSelf: 'center'}}  size='large'/>         
                </Box>

                <ColorModeButton />
                
                <LogoutButton/>

            </Toolbar>
        </AppBar>

        {
            deletedDocument &&
            <Slide direction="left" in={deletedDocument} mountOnEnter unmountOnExit>
                <Alert elevation={3} onClose={() => {dispatch({type: ACTIONS.CLOSE_DELETION_ALERT}) }} sx={{position: 'absolute', top: '80px', right: 0}} severity='error'>Document deleted!</Alert>
            </Slide>

        }
         

        <Typography component='p' sx={{textAlign: 'center',p: 1, color: 'primary.main', fontSize: 30 }} >
            Welcome, <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
            {
                user && user.displayName
            }
            </span>.
        </Typography>

        {
            fetchingDocs && <Loading small={true} />
        }

        {
            !fetchingDocs && 
            <Grid container spacing={3} sx={{p:2}}>
                {displayedDocuments &&
                    displayedDocuments?.map(
                        ({id, data}) => {
                            const {title, description, date} = data
                            return <Grid item xs={12} sm={6} md={4} xxl={2} key={id}>
                            <DocumentPreviewCard id={id} title={title} description={description} date={date}/>
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
                    No Documents found..<br />
                    Add a Document with the floating green button below
                </Typography>
            </Box>
        }




        <Dialog
                onClose={()=>{setShowModal(false)}}
                aria-labelledby="Create new document modal"
                open={showModal}
            >
        <DialogTitle id="New document title" onClose={()=>{setShowModal(false)}}>
          Create new Document
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
          <TextField id="outlined" label="Title" required sx={{my: 2}} fullWidth onChange={(e) => {setNewDocTitle(e.target.value)}} value={newDocTitle}
          />
          <TextField id="outlined" label="Description" required sx={{my: 2}} fullWidth onChange={(e) => {setNewDocDescription(e.target.value)}} value={newDocDescription} multiline rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button type='submit' onClick={addNewDoc} color='success' variant='contained' disabled={newDocCreating}>
            {newDocCreating ? 'Creating..' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
        {/* } */}

        <IconButton elevation={5} sx={{boxShadow: 10, border: 1, p: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', position: 'fixed', bottom: 10, right: 10, bgcolor: 'background.paper', '&:hover': {bgcolor: 'success.light'}}} 
            color='success' onClick={showAddNewDocumentModal} size='large'>
            <NoteAddRoundedIcon sx={{fontSize: {xs: 40, lg: 60}}}/>
        </IconButton>

    </Box>

  );
  }