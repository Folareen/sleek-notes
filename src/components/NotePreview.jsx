import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

export default class NotePreview extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <Card sx={{ maxWidth: 345}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {this.props.title} {this.props.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {this.props.body}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {this.props.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/noteview/${this.props.id}`}>View / Edit</Link>
        <Button color="secondary">Delete</Button>
      </CardActions>
    </Card>
    )
  }
}
