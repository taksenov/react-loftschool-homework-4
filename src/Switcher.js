import { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChild: 0
        };

        this.handleChangeChild = this.handleChangeChild.bind(this);
    }

    handleChangeChild() {} //handleChangeChild

    render() {
        return null;
    }
}

export default Switcher;
