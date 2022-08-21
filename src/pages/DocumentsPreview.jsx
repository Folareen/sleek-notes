import React, { useEffect, useState} from 'react'
import { AppBar, Box, Toolbar, IconButton, InputBase, Grid, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DocumentPreviewCard from '../components/DocumentPreviewCard';
// import testFirebase from '../testFirebase'
import LogoutButton from '../components/LogoutButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ColorModeButton from '../components/ColorModeButton'
import '../styles/style.css'
import { db } from '../firebase'
import { collection, setDoc, doc} from "firebase/firestore";
import useDocuments from '../hooks/useDocuments';
import useUser from '../hooks/useUser';
import getAllDocuments from '../utils/getAllDocuments';

export default function DocumentsPreview () {
    const { user} = useUser()
    const [displayedDocuments, setDisplayedDocuments] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [newDocTitle, setNewDocTitle] = useState('');
    const [newDocDescription, setNewDocDescription] = useState('')

    const {documents, setDocuments} = useDocuments()

    const addNewDoc = async (e) =>{
        e.preventDefault()
        const collectionref = collection(db, user.uid);

        await setDoc(doc(collectionref), {
            title: newDocTitle,
            description: newDocDescription,
            date: `${(new Date()).toTimeString()} ${(new Date()).toDateString()}`
        });
        console.log('added')
        setDocuments(await getAllDocuments(user))
        setShowModal(false)
    }

    useEffect(
        ()=> {
            setDisplayedDocuments(documents)
            console.log(displayedDocuments)
            console.log('set new displayed documents!!')
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
                    />

                    <IconButton type="button" sx={{border: 1 }} aria-label="search">
                        <SearchIcon />
                    </IconButton>            
                </Box>

                <ColorModeButton />
                
                <LogoutButton/>

            </Toolbar>
        </AppBar>

        <Typography component='p' sx={{textAlign: 'center',p: 1, color: 'primary.main', fontSize: 30 }} >
            Welcome back, <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}>
            {
                user && user.displayName
            }
            </span>.
        </Typography>


        {displayedDocuments && displayedDocuments.length > 0 ?
            <Grid container spacing={3} sx={{p:2}}>
            { displayedDocuments && 
                displayedDocuments.map(
                    ({id, data}) => {
                        const {title, description, date} = data
                        return <Grid item xs={12} sm={6} md={4} xxl={2} key={id}>
                        <DocumentPreviewCard id={id} title={title} description={description} date={date}/>
                        </Grid>
                    }
                )
            }
            </Grid>
            : 
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography component='p'>
                    No Documents found..
                    Add a Document with the floating green button below
                </Typography>
            </Box>   

        }


        <IconButton sx={{position: 'fixed', bottom: 3, right: 3, border: 1, boxShadow: 5, p: 2, color:'background.paper', bgcolor:'success.dark','&:hover':{color: 'success.light',bgcolor: 'success.dark'
        }}} className='add-icon' onClick={()=>{setShowModal(true)}}>
            <NoteAddIcon/>
        </IconButton>

        {showModal &&
        <form >
            <input type="text" value={newDocTitle} onChange={(e)=>setNewDocTitle(e.target.value)} />
            <input type="text" value={newDocDescription} onChange={(e)=>setNewDocDescription(e.target.value)} />
            <button type='submit' onClick={addNewDoc}>create</button>
        </form>
        }

    </Box>

  );
  }