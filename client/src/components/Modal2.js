import React, { Component } from 'react';
import Modal2 from 'react-awesome-modal';

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
                <Modal2
                    visible={this.state.visible}
                    width="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal2">
                        <h1>You do not have permission to delete this ride! </h1>
                        <a className="modal-close2" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal2>
            </section>
        );
    }
}