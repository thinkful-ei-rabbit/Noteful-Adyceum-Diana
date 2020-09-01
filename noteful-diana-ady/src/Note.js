import React from 'react';
import {Route} from 'react-router-dom';

const Note = (props) => {
    return(
        props.notes.map(note => {
            return <li id={note.id}><h2>{note.name}</h2><p>Modified:{note.modified}</p></li>
        })
    );
}

export default Note;