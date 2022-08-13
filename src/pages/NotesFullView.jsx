import React, { Component } from 'react'
import { Box, AppBar, Toolbar, FormControlLabel, Switch,Typography, InputBase, FormControl, TextField, Button} from '@mui/material'
import LogoutButton from '../components/LogoutButton'
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';

export default class NotesFullView extends Component {
    constructor(props){
        super(props)
        this.state = { readOnly: true}
        this.toggleMode = this.toggleMode.bind(this)
    }

    toggleMode(){
        console.log(this.state.readOnly)
        this.setState({readOnly: !this.state.readOnly})
    }

  render() {
      const { id} = this.props
    return (
    <Box sx={{height: '100vh'}}>
    
        <AppBar position='sticky'>
            <Toolbar>

                <Typography component='h2'>
                    Note id: {id} {11222}
                </Typography>

                <FormControlLabel control={
                <Switch
                color='secondary'
                checked={this.state.readOnly}
                onChange={this.toggleMode}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="Readonly mode" />

                <LogoutButton/>
            </Toolbar>

            {
                this.state.readOnly 
                &&
                <Toolbar sx={{maxWidth: 800, width: '70%', mx:'auto', display:'flex', justifyContent: 'space-between', xs:{border: 1}}}>

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
}
