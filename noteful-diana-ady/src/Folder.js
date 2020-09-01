import React from 'react';

const Folder = (props) => {
    return (
        props.folders.map(folder => {
            return <li id={folder.id}>{folder.name}</li>
        })
    );
}

export default Folder;