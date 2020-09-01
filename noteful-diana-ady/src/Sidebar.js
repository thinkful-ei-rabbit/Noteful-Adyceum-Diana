import React from 'react';
import Folder from './Folder';

//AKA FoldersList
const Sidebar = (props) => {
    return(<div className='sidebar'>
                <ul>
                    <Folder folders={props.folders}/>
                </ul>
                <button type='button'>Add Folder</button>
            </div>)


}

export default Sidebar;