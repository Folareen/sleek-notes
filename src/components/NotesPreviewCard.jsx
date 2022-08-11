import React, { Component} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class NotesPreviewCard extends Component{


    render(){
        const {id, title, body, date } = this.props 
        return (
            <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title} id:{id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {body}
                </Typography>
                <Typography variant="p" color="text.secondary">
                {date}
                </Typography>


            </CardContent>
            <CardActions>
                <Button size="small">View/Edit</Button>
                <Button size="small"></Button>
            </CardActions>
            </Card>
        );        
    }

}
