import React from 'react'
import { AppBar, Box, Toolbar, IconButton, InputBase, Grid, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotesPreviewCard from '../components/NotesPreviewCard';
import testFirebase from '../testFirebase'
import LogoutButton from '../components/LogoutButton';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ColorModeButton from '../components/ColorModeButton'

// const testFirebase =[]

export default function NotesPreview () {
    return (
    <Box >
        <AppBar position="sticky" sx={{color:'text.primary', py: 1}} elevation={10}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between'}} >

                <Box sx={{flex: 1, border:1,borderRadius: 10, display:'flex', p: 0.8}}>
                    <InputBase
                        sx={{ flex: 1,px:1, color: 'text.primary' }}
                        placeholder="Search Notes with title"
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

        {
            (testFirebase.length > 0) ?
            <Grid container spacing={3} sx={{p:2}}>
            {
                testFirebase.map(
                    ({ id, title, body, date}) => {
                        return <Grid item xs={12} sm={6} md={4} xxl={2} key={id}>
                        <NotesPreviewCard id={id} title={title} body={body} date={date} />
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

        <IconButton sx={{position: 'fixed', bottom: 3, right: 3, border: 1, p: 2, color:'success.dark', bgcolor:'success.light','&:hover':{color: 'success.light',bgcolor: 'success.dark'
        }}}>
            <NoteAddIcon/>
        </IconButton>

    </Box>

  );
  }