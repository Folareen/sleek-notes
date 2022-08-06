import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import { testFirebase } from '../testFirebase'

class noteView extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    console.log(this.props.match) 
    }
    render() {
        const { id } = this.props.params;
        return (
            <div>Username: </div>
        );
    }
}

const NoteView = withRouter(noteView)

export default 