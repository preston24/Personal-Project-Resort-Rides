import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
import { connect } from 'react-redux'

import { getResorts } from '../redux/reducers/resorts';
import { bookRide, getRides } from '../redux/reducers/rides';

// import Modal from './Modal';

class Resort extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resort: {
        id: null,
        resort_name: '',
        img_url: ''
      }
    }
  }

  componentDidMount = () => {
    const { id } = this.props.match.params

    if (!this.state.resortsObj) {
      this.props.getResorts().then(() => {
        this.setState({ resort: this.props.resortsObj[id]})
      })
    } else {
      this.setState({ resort: this.props.resortsObj[id]})
    }

    this.props.getRides(id);
  }


  render() {
  return (
    <div className="resort-page" style={this.state.resort && {backgroundImage: `url(${this.state.resort.img_url})`}}>
      <div>
        <Link to={'/resorts'}><button className="back-btn"> Back to Resorts Page </button></Link>
      </div>

          {this.props.rides.map((ride, index) => {
            return <div className="rides-info" key={index}>
              <h5>{ride.username}</h5>
              <h5>Seats{ride.seats}</h5>
              <h5>${ride.price}</h5>
              <h5>{ride.time}</h5>
              <button onClick={() => this.props.bookRide(ride.ride_id, ride.seats, ride.resort_id)}>Book Ride</button>
            </div>
        })}
          
          <div>
            {this.props.rides.map((ride, index) => {
              return <div key={index}>
                <button onClick={() => this.props.addRide(ride.username, ride.seats, ride.price, ride.time)}>Add Ride</button>
              </div>
            })}
          </div>
    </div>
  )
 }
}

function mapStateToProps (state) {
  const { resortsObj } = state.resorts
  const { rides } = state.rides
  return { resortsObj, rides }
}

export default connect(mapStateToProps, { getResorts, getRides, bookRide })(Resort)