import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(
            children,
            document.getElementById('portal')
        );
        // return (
        //     <div class="modal">
        //         <div class="modal__fog">
        //             <div class="modal__body">
        //                 <h1>Модальное окно!</h1>
        //                 <button>Закрыть</button>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

export default Modal;
