import React from 'react';
import './App.css';
//import {Route} from 'react-router-dom';
import NotesList from './NoteList';
import Header from './Header';
import Sidebar from './Sidebar';
import STORE from './STORE';

class App extends React.Component {
  state = {
      notes: STORE.notes,
      folders: STORE.folders
  };

  render() {
    return(
      <div className = 'wrapper'>
    <Header/>
    <Sidebar folders={this.state.folders}/>
    <NotesList notes={this.state.notes}/>
    </div>
    )
  }



};

export default App;