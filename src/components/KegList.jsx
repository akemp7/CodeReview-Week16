import React from 'react';
import Keg from './Keg';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

function KegList(props) {
    // var headerStyle = {
    //     textAlign: "center",
    // }

    // var imageStyle = {
    //     width: "40%",
    //     height: "300px",
    //     float: "right",
    //     paddingRight: "10%",
    //     paddingTop: "5%",
    // }
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

KegList.propTypes = {
    kegList: PropTypes.array
};

export default KegList;