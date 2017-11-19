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
        // this.renderModal = this.renderModal.bind(this);
    } // constructor

    static displayName = 'Modal Button';

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

    // renderModal() {
    //     if ;
    // } //renderModal

    render() {
        return (
            <div>
                <button onClick={this.showModal}>Show modal window</button>
                {this.state.isModalShow === true && (
                    <Modal>
                        <div class="modal">
                            <div class="modal__fog">
                                <div class="modal__body">
                                    <h1>Модальное окно!</h1>
                                    <button onClick={this.hideModal}>
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        );
    }
}

export default ModalButton;
