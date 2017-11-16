import React, { Component } from 'react';
import Modal from './Modal';

class ModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false
        };
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.renderModal = this.renderModal.bind(this);
    } // constructor

    hideModal() {
        this.setState({
            isModalShow: false
        });
    } //hideModal

    showModal() {
        this.setState({
            isModalShow: true
        });
    } //showModal

    renderModal() {
        if (this.state.isModalShow === true) return <Modal />;
    } //renderModal

    render() {
        return <div>{this.renderModal()}</div>;
    }
}

export default ModalButton;
