import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

function NewKegControl(props) {
    return (
        <div>
            <NewKegForm onNewKegCreation =  {props.handleAddingNewKegToList} />
            <KegList kegList = {props.kegList} />
        </div>
    );
}

export default NewKegControl;