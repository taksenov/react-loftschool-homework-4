import React, { Component } from 'react';

class CardNumberInput extends Component {
    constructor(props) {
        super(props);

        this.format = this.format.bind(this);
        this.normalize = this.normalize.bind(this);
    } //constructor

    componentWillReceiveProps() {} //componentWillReceiveProps

    format() {} //format

    normalize(e) {
        console.log('e.target.value', e.target.value);
    } //normalize

    render() {
        return <input type="text" onChange={this.normalize} />;
    } //render
}

export default CardNumberInput;
