import React from 'react';
import PropTypes from 'prop-types';


class Keg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            brand: null,
            price: null,
            flavor: null, 
            amount: 10,
        };

        this.handleIncrementKeg = this.handleIncrementKeg.bind(this);
    }

    handleIncrementKeg () {
        var temp = this.state.amount;
        temp -= 1;
        this.setState({ amount: temp});
    }

render() {
    return (
        <div>
            <p>Name: {this.props.name}</p>
            <p>Brand: {this.props.brand}</p>
        </div>
        );
    }
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string
};

export default Keg;



// function Keg(props) {
//     var propsStyle = {
//         textAlign: "center"
//     }
//     return (
//         <div className="container">
//             <p style={propsStyle}> {props.name}</p>
//             <ul>
//                 <li>Brand: {props.brand}</li>
//                 <li>Price: {props.price}</li>
//                 <li>Flavor: {props.flavor}</li>
//             </ul>
//         </div>
//     );
// }

// Keg.propTypes = {
//     name: PropTypes.string,
//     brand: PropTypes.string,
//     price: PropTypes.string,
//     flavor: PropTypes.string
// };

// export default Keg;