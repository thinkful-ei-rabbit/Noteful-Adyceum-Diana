import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Note from './Note';

//MAIN PAGE NOT MAIN ELEMENT COMPONENT

const NotesList = (props) => {
    return(<div className='notesList'>
                <ul>
                    <Note notes={props.notes}/>
                </ul>
                <button type='button'>Add Note</button>
            </div>)

}

export default NotesList;