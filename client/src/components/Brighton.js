import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Brighton extends Component {
  constructor(props) {
    super(props)

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
      <Link to={'/resorts'}><button className="back-btn"> Back to Resorts Page </button></Link>

        {this.state.rides.map((ride, index) => {
          return <div className="rides-info" key={index}>
            <h5>{ride.username}</h5>
            <h5>Seats{ride.seats}</h5>
            <h5>${ride.price}</h5>
            <h5>{ride.time}</h5>
          </div>
      })}
    </div>
  )
 }
}