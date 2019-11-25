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
            <div className="container">
                <p>Name: {this.props.name}</p>
                <ul>
                    <li>Brand: {this.props.brand}</li>
                    <li>Flavor: {this.props.flavor}</li>
                    <li>Price: {this.props.price}</li>
                    <li>Amount: {this.props.amount}</li>
                </ul>
            </div>
        </div>
        );
    }
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string
};

export default Keg;
