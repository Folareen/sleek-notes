import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class NotePreview extends Component {

  render() {
    return (
    <Card sx={{ maxWidth: 345, m:'auto' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem Note Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, in minima. Cupiditate laborum laboriosam maxime repudiandae, moles...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
        <Button color="secondary">Delete</Button>
      </CardActions>
    </Card>
    )
  }
}
