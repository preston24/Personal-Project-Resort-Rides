import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal">
                        <h1>Ride booked!</h1>
                        <p>Please meet at the specified time.</p>
                        <a className="modal-close" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}