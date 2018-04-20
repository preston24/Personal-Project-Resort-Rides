import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
 
export default class App extends Component {
 
  constructor(){
    super()
    this.state = {}
  }
 
  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }
 
 
  render(){
    return (
      <div>
      <button onClick={this.show.bind(this)}>Send Message</button>
      <Modal
      containerStyle={{background: '#5e5e5e', height: '100px'}} 
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <input className="modal-input"></input>
 
      </Modal>
      </div>
    )
  }
}