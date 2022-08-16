import React, { useState } from 'react'
import { Box, AppBar, Toolbar, FormControlLabel, Switch, InputBase, FormControl, TextField, Button, InputLabel, Select, MenuItem, IconButton, Typography} from '@mui/material'
import LogoutButton from '../components/LogoutButton'
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeButton from '../components/HomeButton'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ColorModeButton from '../components/ColorModeButton'
import ChromeReaderModeRoundedIcon from '@mui/icons-material/ChromeReaderModeRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function NotesFullView ({id, title, body, date}) {
    const [readOnly, setReadOnly] = useState(true)
    const [fontSize, setFontSize] = useState('small')
    const [noteBody, setNoteBody] = useState('')

    const toggleMode =() =>{
        setReadOnly(!readOnly)
    }

    const changeFontSize =(e) => {
        setFontSize(e.target.value)
    }

    return (
    <Box sx={{height: '100vh', bgcolor:'danger.main'}}>
    
        <AppBar position='sticky'  >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto'}}>

                <HomeButton />

                <Box sx={{bgcolor: 'text.disabled', p: 0.3, borderRadius: 1}}>
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

                <Button sx={{fontWeight:'bold', py:1.3, px: 1}} color='secondary' variant='contained'>
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

            {
                !readOnly
                &&
                <Toolbar sx={{display: 'flex', flexDirection: 'column', borderTop: 2, borderTopColor: 'background.paper', py: 1}} 
                >

                    <Box sx={{maxWidth: 800, width: '80%', mx:'auto', display:'flex', flexWrap: 'wrap',justifyContent: 'space-around', color: 'text.primary', my: 0.5, alignItems: 'center'}}>

                        <FormControl >
                            <InputLabel id="demo-simple-select-label"><FormatSizeIcon /></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={fontSize}
                                label="Font Size"
                                onChange={changeFontSize}
                            >
                                <MenuItem value={'small'}>Small</MenuItem>
                                <MenuItem value={'medium'}>Medium</MenuItem>
                                <MenuItem value={'large'}>Large</MenuItem>
                            </Select>
                        </FormControl>

                        <IconButton>
                            <FormatBoldIcon />
                        </IconButton>
                        <IconButton>
                            <FormatColorTextIcon />
                        </IconButton>
                        <IconButton>
                            <FontDownloadIcon/>
                        </IconButton>
                        <IconButton>
                            <FormatItalicIcon />
                        </IconButton>
                        <IconButton>
                            <FormatUnderlinedIcon />
                        </IconButton>
                        <IconButton>
                            <FormatListBulletedIcon />
                        </IconButton>
                        <IconButton>
                            <FormatListNumberedIcon />
                        </IconButton>


                    </Box>

                    <Box
                    sx={{maxWidth: 800, width: '80%', mx:'auto', display:'flex', justifyContent: 'space-between', my: 0.5}}>
                        <Button sx={{fontWeight:'bold'}} color='success' variant='contained'
                        >
                            <Typography component='span' sx={{fontWeight: 'bold', mx: 1, display: {
                                xs: 'none',
                                sm: 'inline-block'
                            }}}>
                                Save
                            </Typography>
                            <SaveIcon/>
                        </Button>

                        <Button sx={{fontWeight:'bold'}} color='error' variant='contained'>
                            <Typography component='span' sx={{fontWeight: 'bold', mx: 1, display: {
                                xs: 'none',
                                sm: 'inline-block'
                            }}}>
                                Cancel
                            </Typography>
                            <CancelIcon/>
                        </Button>

                        <Button sx={{fontWeight:'bold'}} color='error' variant='contained'
                        >
                            <Typography component='span' sx={{fontWeight: 'bold', mx: 1, display: {
                                xs: 'none',
                                sm: 'inline-block'
                            }}}>
                                Delete
                            </Typography>
                            <DeleteForeverIcon/>
                        </Button>
                    </Box>


                </Toolbar> 
            }


        </AppBar>

        <Box sx={{ color:'primary.main', p:2}}>
            <FormControl component='form' fullWidth>

                <InputBase
                    sx={{color:'text.primary', p:1, border: 1, borderRadius:1, fontSize:25, fontWeight: 'bold', textTransform: 'capitalize'}}
                    placeholder="Note Title"
                    inputProps={{ 'aria-label': 'search note' }}
                    type='text'
                />

                <TextField
                rows={readOnly ? 20 : 15 }
                disabled={readOnly}
                placeholder='Note Body'
                multiline
                fullWidth
                sx={{mt: 2}}
                value={noteBody}
                onChange={(e)=>{setNoteBody(e.target.value)}}
                />    

            </FormControl>

        </Box>
    </Box> 
    )
  }