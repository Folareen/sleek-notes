import React, { useState } from 'react'
import { Box, AppBar, Toolbar, FormControlLabel, Switch, InputBase, FormControl, TextField, Button, InputLabel, Select, MenuItem, IconButton} from '@mui/material'
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

export default function NotesFullView ({id, title, body, date}) {
    const [readOnly, setReadOnly] = useState(true)
    const [fontSize, setFontSize] = useState('small')

    const toggleMode =() =>{
        setReadOnly(!readOnly)
    }

    const changeFontSize =(e) => {
        setFontSize(e.target.value)
    }

    return (
    <Box sx={{height: '100vh', bgcolor:'danger.main'}}>
    
        <AppBar position='sticky' >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>

                <HomeButton />

                <FormControlLabel control={
                <Switch
                color='secondary'
                checked={readOnly}
                onChange={toggleMode}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="Readonly mode"/>

                <LogoutButton/>
                
            </Toolbar>

            {
                !readOnly
                &&
                <Toolbar sx={{display: 'flex', flexDirection: 'column'}} 
                >

                    <Box sx={{maxWidth: 800, width: '70%', mx:'auto', display:'flex', justifyContent: 'space-between', my: 2}}>

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
                        <Button sx={{fontWeight:'bold', color:'success.main', bgcolor:'light.main','&:hover':{color: 'light.main',bgcolor: 'success.main'
                        }}} endIcon={<FileDownloadIcon/>}>
                            Download as Pdf
                        </Button>

                    </Box>

                    <Box
                    sx={{maxWidth: 800, width: '70%', mx:'auto', display:'flex', justifyContent: 'space-between'}}>
                        <Button sx={{fontWeight:'bold', color:'success.main', bgcolor:'light.main','&:hover':{color: 'light.main',bgcolor: 'success.main'
                        }}} endIcon={<SaveIcon/>}>
                            Save
                        </Button>

                        <Button sx={{fontWeight:'bold', color:'danger.main', bgcolor:'light.main', '&:hover': {color:'light.main', bgcolor:'danger.main'
                        } }} endIcon={<CancelIcon/>}>
                            Discard Changes
                        </Button>

                        <Button sx={{fontWeight:'bold', color:'danger.main', bgcolor:'light.main', '&:hover': {color:'light.main', bgcolor:'danger.main'
                        } }} endIcon={<DeleteForeverIcon/>}>
                            Delete
                        </Button>
                    </Box>


                </Toolbar> 
            }


        </AppBar>

        <Box sx={{ color:'primary.main', p:2}}>
            <FormControl component='form' fullWidth>

                <InputBase
                    sx={{color:'primary.main', p:1, border: 1, borderRadius:1, fontSize:25, fontWeight: 'bold', textTransform: 'capitalize'}}
                    placeholder="Note Title"
                    inputProps={{ 'aria-label': 'search note' }}
                    type='text'
                />

                <TextField
                rows={20}
                placeholder='Note Body'
                multiline
                fullWidth
                sx={{mt: 2}}
                />    

            </FormControl>

        </Box>
    </Box> 
    )
  }