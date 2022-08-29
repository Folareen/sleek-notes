import React, { useState, useEffect} from 'react'
import { Box, AppBar, Toolbar, InputBase, Button, IconButton, Typography, Slide, Alert} from '@mui/material'
import LogoutButton from '../components/LogoutButton'
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeButton from '../components/HomeButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ColorModeButton from '../components/ColorModeButton'
import ChromeReaderModeRoundedIcon from '@mui/icons-material/ChromeReaderModeRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import {useParams, useNavigate} from 'react-router-dom'
import { db} from '../firebase'
import useUser from '../hooks/useUser';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import displayDateAndTime from '../utils/displayDateAndTIme'
import useDocuments from '../hooks/useDocuments';
import {ACTIONS} from '../reducers/actions'
import getAllDocuments from '../utils/getAllDocuments';

export default function DocumentFullView () {
    const [readOnly, setReadOnly] = useState(true)
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [updating, setUpdating] = useState(false)
    const [body, setBody] = useState('')
    const [deletingDocument, setDeletingDocument] = useState(false)
    const {id} = useParams()
    const {user} = useUser()
    const {dispatch, updatedDocument} = useDocuments()
    const navigate = useNavigate()

    useEffect(
        ()=> {
            (async function (){
                const docRef = doc(db, user.uid, id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setTitle(docSnap.data().title)
                    setDescription(docSnap.data().description)
                    setBody(docSnap.data().body)
                    const { contentBlocks, entityMap } = htmlToDraft(docSnap.data().body);
                    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                    setEditorState(EditorState.createWithContent(contentState))

                } else {
                // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })()
            // eslint-disable-next-line
        }, [id, user.uid]
    )

    const toggleMode =() =>{
        setReadOnly(!readOnly)
    }

    const handleOnEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const wrapperStyle = {
        border: '1px solid grey',
        marginTop: '20px',
        color: 'inherit',
        backgroundColor: 'inherit'
    }
    const editorStyle = {
        height: '50vh',
        overflowY: 'scroll'
    }
    const toolbarStyle = {
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'inherit',
        border: '1px solid grey',
        color: 'inherit'
    }


    const updateDocument = async () => {
        setBody(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        setUpdating(true)
        try{
            await updateDoc(doc(db, user.uid, id), {
            title,
            description,
            body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
            date: displayDateAndTime()
            });
            dispatch({type: ACTIONS.UPDATE_DOCUMENT, payload: await getAllDocuments(user)})
            dispatch({type: ACTIONS.UPDATED_DOCUMENT})
        }
        catch{
            console.log('error')
        }
        finally{
            setUpdating(false)
        }
        
    }

    const cancelChanges = () => {
        setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(body))))
        setReadOnly(true)
    }

    const deleteDocument = async () => {
        setDeletingDocument(true)
        try{
            await deleteDoc(doc(db, user.uid, id));
            dispatch({type: ACTIONS.DELETE_DOC, payload: await getAllDocuments(user)})
            alert('Document Deleted!')
            navigate('/')
        }
        catch{
            console.log('error')
        }
        finally{
            setDeletingDocument(false)
        }

    }


    return (
    <Box sx={{height: '100vh', bgcolor:'danger.main'}}>
    
        <AppBar position='sticky'  >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', maxWidth: 1440, width: '100%', mx: 'auto', py: 1.3}}>

                <HomeButton />

                <Box sx={{bgcolor: 'text.disabled', p: 0.2, borderRadius: 1}}>
                    <Typography component='span' sx={{bgcolor:'text.secondary', color: 'background.paper', p: 0.8, borderRadius: 1, mx: 0.5, display: { xs: 'none', sm: 'inline-block'}}}>
                        Mode: {readOnly ? 'Read': 'Edit'}
                    </Typography>
                    <IconButton sx={{border: 1, borderColor: 'background.paper', mx: 0.5, color: 'text.secondary',bgcolor: 'primary.dark', '&:hover': {
                        color: 'primary.dark',bgcolor: 'text.secondary'
                    }}} onClick={toggleMode}>
                        {
                            readOnly ? 
                            <EditRoundedIcon />
                            :
                            <ChromeReaderModeRoundedIcon />
                        }
                    </IconButton>
                </Box>

                <Button sx={{fontWeight:'bold', py:1.3, px: 1}} color='success' variant='contained'>
                    <Typography component='span' sx={{display: {
                        xs: 'none',
                        sm: 'inline-block'
                    }}}>
                        Download as Pdf
                    </Typography>
                    <FileDownloadIcon />
                </Button>

                <ColorModeButton />

                <LogoutButton/>
                
            </Toolbar>


        </AppBar>
        {
            updatedDocument &&
            <Slide direction="left" in={updatedDocument} mountOnEnter unmountOnExit >
                <Alert elevation={3} onClose={() => {dispatch({type: ACTIONS.CLOSE_UPDATE_ALERT}) }} sx={{position: 'absolute', top: '70px', right: 0, color: 'success.dark'}} severity='success'>Saved Changes!</Alert>
            </Slide>
        }

        <Box sx={{ color:'primary.main', p: 2, py: 4, maxWidth: 1440, mx: 'auto'}}>

                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <InputBase
                        sx={{color:'text.primary', p:1,border:1, borderColor: 'text.primary', borderRadius:1, fontSize:24, fontWeight: 'bold', textTransform: 'capitalize', width: '37.5%'}}
                        placeholder="Document Title"
                        inputProps={{ 'aria-label': 'Document Title' }}
                        type='text'
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                        disabled={readOnly}
                    />

                    <InputBase
                        sx={{color:'text.secondary', p:1,border:1, borderColor: 'text.primary', borderRadius:1, fontSize:16, textTransform: 'capitalize', width: '57.5%'}}
                        placeholder="Document Description" multiline rows={2}
                        inputProps={{ 'aria-label': 'Document Description' }}
                        type='text'
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                        disabled={readOnly}
                    />
                </Box>

                {
                    readOnly?
                    <Box dangerouslySetInnerHTML={{__html: body}} sx={{border:1, borderColor: 'text.primary' , my: 2, height: '70vh', overflowY: 'scroll', px: 2}}>
                    </Box>
                    :
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={handleOnEditorStateChange}
                        wrapperStyle={wrapperStyle}
                        editorStyle={editorStyle}
                        toolbarStyle={toolbarStyle}
                    /> 

                }
                {
                    !readOnly
                    &&
                    <Toolbar sx={{display: 'flex', flexDirection: 'column',  py: 1}} 
                    >

                        <Box
                        sx={{maxWidth: 800, width: '80%', mx:'auto', display:'flex', justifyContent: 'space-between', my: 0.5}}>
                            <Button sx={{fontWeight:'bold'}} color='success' variant='contained' onClick={updateDocument} disabled={updating}
                            >
                                <Typography component='span' sx={{fontWeight: 'bold', mx: 1, display: {
                                    xs: 'none',
                                    sm: 'inline-block'
                                }}}>
                                    {updating? 'Saving...' : 'Save'}
                                </Typography>
                                <SaveIcon/>
                            </Button>

                            <Button sx={{fontWeight:'bold'}} color='error' variant='contained' onClick={cancelChanges}>

                                <Typography component='span' sx={{fontWeight: 'bold', mx: 1, display: {
                                    xs: 'none',
                                    sm: 'inline-block'
                                }}}>
                                    Cancel
                                </Typography>
                                <CancelIcon/>

                            </Button>

                            <Button sx={{fontWeight:'bold'}} color='error' variant='contained'
                            onClick={deleteDocument} disabled={deletingDocument}
                            >
                                <Typography component='span' sx={{fontWeight: 'bold', mx: 1, display: {
                                    xs: 'none',
                                    sm: 'inline-block'
                                }}}>
                                    {deletingDocument? 'Deleting...': 'Delete'}
                                </Typography>
                                <DeleteForeverIcon/>
                            </Button>
                        </Box>


                    </Toolbar> 
                }



        </Box>
    </Box> 
    )
  }