import React from 'react';
import Keg from './Keg';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

function NewKegControl (props) {
    return (
        <div>
            <Navbar />
            <div>
                {props.kegList.map((keg) =>
                    <Keg name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        flavor={keg.flavor}
                        key={keg.id} />

                )}
            </div>
        </div>
    );
}

NewKegControl.propTypes = {
    kegList: PropTypes.array
};

export default NewKegControl;