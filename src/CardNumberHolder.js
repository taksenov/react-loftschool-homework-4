import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: ''
        };

        this.handleChange = this.handleChange.bind(this);
    } //constructor

    static displayName = 'Card number holder';

    handleChange(e) {
        this.setState({ cardNumber: e.target.value });
    } //handleChange

    render() {
        return <CardNumberInput onChange={this.handleChange} />;
    }
}

export default CardNumberHolder;
