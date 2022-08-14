import React from 'react'
import { IconButton, CardActions, CardContent, Card, Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function NotesPreviewCard ({id, title, body, date}){
        return (
            <Card sx={{px:2, py:1}} elevation={5}>

                <CardContent sx={{p:0}}>

                    <Typography gutterBottom component="h2" variant='h5' sx={{fontWeight: 'bold',textTransform: 'capitalize', color:'primary.main', borderBottom: 1, borderColor: 'secondary.main', py:1}} >
                    {title} id:{id}
                    </Typography>

                    <Typography variant="p" 
                    component='p' sx={{py: 1, color:"primary.main"}}>
                    {body}
                    </Typography>

                    <Typography variant="body" component='p' sx={{fontStyle: 'italic', fontWeight: 'light', color:"secondary.main"}}>
                    Last Updated: {date}
                    </Typography>

                </CardContent>

                <CardActions sx={{display:'flex', justifyContent: 'space-between', borderTop: 1, borderColor: 'info.main', px:0}}>

                    <Button sx={{fontWeight:'bold', color:'success.main', bgcolor:'light.main','&:hover':{color: 'light.main',bgcolor: 'success.main'
                    }}} endIcon={<NoteAltIcon/>}>
                        View/Edit
                    </Button>

                    <IconButton  sx={{color:'danger.main', bgcolor:'light.main', '&:hover': {color:'light.main', bgcolor:'danger.main'
                    } }}>
                        <DeleteForeverIcon/>         
                    </IconButton>

                </CardActions>
            </Card>
        );        
}