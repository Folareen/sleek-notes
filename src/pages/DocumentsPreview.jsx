import React, {useContext, useEffect, useState} from 'react'
import { AppBar, Box, Toolbar, IconButton, InputBase, Grid, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotesPreviewCard from '../components/DocumentPreviewCard';
// import testFirebase from '../testFirebase'
import LogoutButton from '../components/LogoutButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ColorModeButton from '../components/ColorModeButton'
import '../styles/style.css'
import { AuthContext} from '../context/AuthContext'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
// const testFirebase =[]

export default function DocumentsPreview () {
    const { user} = useContext(AuthContext)
    const [notes, setNotes] = useState([])

    useEffect(
        ()=> {
            (async function (){
                // setLoading(true)
                const querySnapshot = await getDocs(collection(db, user.uid));
                console.log(querySnapshot)
                // console.log(typeof querySnapshot)
                // setNotes(querySnapshot.docs)
                const collectionOfDocuments = []

                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    collectionOfDocuments.push({id: doc.id, data})
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                });
                console.log('here?')
                console.log(collectionOfDocuments)
                setNotes(collectionOfDocuments)
                // setLoading(false)
            })()
        }, [user]
    )

    return (
    <Box >
        <AppBar position="sticky" sx={{color:'text.primary', py: 0.5}} elevation={10}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >

                <Box sx={{flex: 1, border:1,borderRadius: 10, display:'flex', p: 0.8}}>
                    <InputBase
                        sx={{ flex: 1,px:1, color: 'text.primary', fontSize: { xs: 16, md: 20}}}
                        placeholder="Search Document with title"
                        inputProps={{ 'aria-label': 'search note' }}
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


        {notes?
            <Grid container spacing={3} sx={{p:2}}>
            { notes && 
                notes.map(
                    ({id, data}, index) => {
                        const {body, title} = data
                        return <Grid item xs={12} sm={6} md={4} xxl={2} key={index}>
                        <NotesPreviewCard id={id} title={title} body={body}/>
                        </Grid>
                    }
                )
            }
            </Grid>
            : 
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography component='p'>
                    No notes found..
                    Add a note with the floating green button below
                </Typography>
            </Box>   

        }


        <IconButton sx={{position: 'fixed', bottom: 3, right: 3, border: 1, boxShadow: 5, p: 2, color:'background.paper', bgcolor:'success.dark','&:hover':{color: 'success.light',bgcolor: 'success.dark'
        }}} className='add-icon'>
            <NoteAddIcon/>
        </IconButton>

    </Box>

  );
  }