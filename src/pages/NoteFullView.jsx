import React, { useState, useEffect, useRef } from 'react'
import { Box, AppBar, Toolbar, Button, IconButton, Typography, Skeleton, TextField } from '@mui/material'
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
import { useParams, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import useUser from '../hooks/useUser';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import displayDateAndTime from '../utils/displayDateAndTIme'
import useNotes from '../hooks/useNotes';
import { ACTIONS } from '../reducers/actions'
import getAllNotes from '../utils/getAllNotes';
import ReactToPdf from 'react-to-pdf'
import { toast } from 'react-toastify';

export default function NoteFullView() {
    const [readOnly, setReadOnly] = useState(true)
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [updating, setUpdating] = useState(false)
    const [body, setBody] = useState('')
    const [deletingNote, setDeletingNote] = useState(false)
    const [loadingNote, setLoadingNote] = useState(true)
    const { id } = useParams()
    const { user } = useUser()
    const { dispatch } = useNotes()
    const navigate = useNavigate()
    const bodyRef = useRef()

    useEffect(
        () => {
            (async function () {
                const docRef = doc(db, user.uid, id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setTitle(docSnap.data().title)
                    setDescription(docSnap.data().description)
                    setBody(docSnap.data().body)
                    const { contentBlocks, entityMap } = htmlToDraft(docSnap.data().body);
                    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                    setEditorState(EditorState.createWithContent(contentState))
                    setLoadingNote(false)

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such Note!");
                }
            })()
            // eslint-disable-next-line
        }, []
    )

    const toggleMode = () => {
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
        height: '45vh',
        maxHeight: '900px',
        overflowY: 'scroll',
    }
    const toolbarStyle = {
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'inherit',
        border: '1px solid grey',
        color: 'inherit'
    }


    const updateNote = async () => {
        setBody(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        setUpdating(true)
        try {
            await updateDoc(doc(db, user.uid, id), {
                title,
                description,
                body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                date: displayDateAndTime()
            });
            dispatch({ type: ACTIONS.UPDATE_NOTE, payload: await getAllNotes(user) })
            toast.success('Changes saved!')
        }
        catch {
            toast.error('Error!.\nPlease try again')
        }
        finally {
            setUpdating(false)
        }

    }

    const cancelChanges = () => {
        setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(body))))
        setReadOnly(true)
    }

    const deleteNote = async () => {
        setDeletingNote(true)
        try {
            await deleteDoc(doc(db, user.uid, id));
            dispatch({ type: ACTIONS.DELETE_NOTE, payload: await getAllNotes(user) })
            toast.info('Note deleted successfully!')
            navigate('/')
        }
        catch {
            toast.error('Eroor!. \n Please try again')
            console.log('error')
        }
        finally {
            setDeletingNote(false)
        }

    }


    return (
        <Box sx={{ height: '100vh' }}>

            <AppBar position='sticky'  >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1440, width: '100%', mx: 'auto', py: 1.3 }}>

                    <HomeButton />

                    <Box sx={{ bgcolor: 'text.disabled', p: 0.25, borderRadius: 1 }}>
                        <Typography component='span' sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 0.8, borderRadius: 1, mx: 0.5, display: { xs: 'none', sm: 'inline-block' } }}>
                            Mode: {readOnly ? 'Read' : 'Edit'}
                        </Typography>
                        <IconButton sx={{
                            border: 1, borderColor: 'background.paper', mx: 0.5, color: 'text.secondary', bgcolor: 'primary.dark', '&:hover': {
                                color: 'primary.dark', bgcolor: 'text.secondary'
                            }
                        }} onClick={toggleMode}>
                            {
                                readOnly ?
                                    <EditRoundedIcon />
                                    :
                                    <ChromeReaderModeRoundedIcon />
                            }
                        </IconButton>
                    </Box>

                    <ReactToPdf filename={`${title}.pdf`} targetRef={bodyRef} options={{
                        format: [bodyRef?.current?.clientWidth, bodyRef?.current?.clientHeight],
                        unit: 'px',
                    }} scale={1}>
                        {
                            ({ toPdf }) => (
                                <Button sx={{ fontWeight: 'bold', py: 1.3, px: 1, bgcolor: 'primary.light', color: 'success.dark' }} variant='contained' onClick={toPdf}>
                                    <Typography component='span' sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'inline-block'
                                        }
                                    }}>
                                        Download as Pdf
                                    </Typography>
                                    <FileDownloadIcon />
                                </Button>
                            )
                        }
                    </ReactToPdf>

                    <ColorModeButton />

                    <LogoutButton />

                </Toolbar>


            </AppBar>


            <Box sx={{ color: 'primary.main', p: 2, maxWidth: 1440, mx: 'auto' }}>

                {
                    loadingNote ?
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Skeleton animation='wave' variant='rectangular' height={70} width='37.5%' />
                            <Skeleton animation='wave' variant='rectangular' height={70} width='57.5%' />
                        </Box>
                        :
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                            <TextField
                                id='outlined' label='Title'
                                sx={{ color: 'text.primary', textTransform: 'capitalize', width: '37.5%' }}
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                disabled={readOnly}
                            />

                            <TextField
                                id='outlined'
                                sx={{ color: 'text.secondary', textTransform: 'capitalize', width: '57.5%' }}
                                label="Description" multiline rows={2}
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                disabled={readOnly}
                            />

                        </Box>
                }


                {
                    readOnly ?
                        <>
                            {loadingNote ?
                                <Skeleton animation="wave" variant='rectangular' height={'70vh'} sx={{ my: 2 }} />
                                :
                                <Box sx={{ position: 'relative' }}>
                                    <Box dangerouslySetInnerHTML={{ __html: body }} sx={{ border: 1, borderColor: 'text.disabled', my: 2, height: '70vh', overflowY: 'scroll', px: 2, zIndex: 1, }} ref={bodyRef}>
                                    </Box>
                                    <Typography component='p' sx={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', zIndex: 2, bgcolor: 'background.paper', p: 0.5, color: 'text.disabled' }}>
                                        Body
                                    </Typography>
                                </Box>

                            }
                        </>

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
                    <Toolbar sx={{ display: 'flex', flexDirection: 'column', py: 1 }}
                    >

                        <Box
                            sx={{ maxWidth: 800, width: '80%', mx: 'auto', display: 'flex', justifyContent: 'space-between', my: 0.5 }}>
                            <Button sx={{ fontWeight: 'bold' }} color='success' variant='contained' onClick={updateNote} disabled={updating}
                            >
                                <Typography component='span' sx={{
                                    fontWeight: 'bold', mx: 1, display: {
                                        xs: 'none',
                                        sm: 'inline-block'
                                    }
                                }}>
                                    {updating ? 'Saving...' : 'Save'}
                                </Typography>
                                <SaveIcon />
                            </Button>

                            <Button sx={{ fontWeight: 'bold' }} color='error' variant='contained' onClick={cancelChanges}>

                                <Typography component='span' sx={{
                                    fontWeight: 'bold', mx: 1, display: {
                                        xs: 'none',
                                        sm: 'inline-block'
                                    }
                                }}>
                                    Cancel
                                </Typography>
                                <CancelIcon />

                            </Button>

                            <Button sx={{ fontWeight: 'bold' }} color='error' variant='contained'
                                onClick={deleteNote} disabled={deletingNote}
                            >
                                <Typography component='span' sx={{
                                    fontWeight: 'bold', mx: 1, display: {
                                        xs: 'none',
                                        sm: 'inline-block'
                                    }
                                }}>
                                    {deletingNote ? 'Deleting...' : 'Delete'}
                                </Typography>
                                <DeleteForeverIcon />
                            </Button>
                        </Box>


                    </Toolbar>
                }



            </Box>
        </Box>
    )
}