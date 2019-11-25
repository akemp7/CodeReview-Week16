import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Navbar from './Navbar';

function NewKegForm(props){
    let _name = null;
    let _brand = null;
    let _price = null;
    let _flavor = null;

    function handleNewSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, flavor: _flavor.value, id: v4 ()});

        _name.value='';
        _brand.value='';
        _price.value='';
        _flavor.value='';
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleNewSubmission}>
                <input type='text'
                    id='name'
                    placeholder='Name'
                    ref={(input) => {_name=input;}}/>
                <input type='text'
                    id='brand'
                    placeholder='Brand'
                    ref={(input) => { _brand = input; }}/>
                <input type='text'
                    id='price'
                    placeholder='Price'
                    ref={(input) => { _price = input; }} />
                <input type='text'
                    id='flavor'
                    placeholder='Flavor'
                    ref={(input) => { _flavor = input; }} />
                <button type='submit'>Submit new Kombucha</button>
                
            </form>
        </div>
    );
}

NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegForm;