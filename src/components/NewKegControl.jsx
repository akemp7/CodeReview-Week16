import React from 'react';
import NewKegForm from './NewKegForm';
import Navbar from './Navbar';


function NewKegControl(props) {
    return (
        <div>
            <Navbar/>
            <NewKegForm onNewKegCreation =  {props.handleAddingNewKegToList} />
           
        </div>
    );
}

export default NewKegControl;