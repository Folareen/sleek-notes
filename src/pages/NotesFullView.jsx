import React, { Component } from 'react'
import { Box, AppBar, Toolbar, FormControlLabel, Switch,Typography, InputBase, FormControl, TextField} from '@mui/material'
import LogoutButton from '../components/LogoutButton'

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

        </AppBar>

        <Box sx={{ color:'primary.main', p:1}}>
            yo
            <FormControl component='form' fullWidth>
                <InputBase
                    sx={{color:'primary.main', p:1, border: 1, borderRadius:1, fontSize:25, fontWeight: 'bold', textTransform: 'capitalize'}}
                    placeholder="Note Title"
                    inputProps={{ 'aria-label': 'search note' }}
                    type='text'
                />
                <Box sx={{height: '50vh', border: 1, textOverflow: 'scroll', overflowY: 'scroll'}}>
                    <TextField
                    sx={{outline: 'none', appearance: 'none'}}
                    placeholder='Note Body'
                    multiline
                    fullWidth
                    />                    
                </Box>

            </FormControl>

        </Box>
    </Box> 
    )
  }
}
