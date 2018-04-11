import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Brighton extends Component {
  constructor(props) {
    super()

    this.state = {
      rides: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:9090/api/ride_resort/1').then(response => {
      this.setState({
        rides: response.data
      });
    });
  }

  render() {
  return (
    <div className="brighton-msg">
      <Link to={'/resorts'}><button className="back-btn"> Back </button></Link>
      {this.state.rides.map(ride => {
        return <div>{ride.username}</div>
      })}
    </div>
  )
 }
}