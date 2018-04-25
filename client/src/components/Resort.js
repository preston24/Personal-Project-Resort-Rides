import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
import { connect } from 'react-redux'

import { getResorts } from '../redux/reducers/resorts';
import { bookRide, getRides, addRide, deleteRide } from '../redux/reducers/rides';

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

  handleAddRide = () => {
    const { id } = this.props.match.params

    this.props.addRide(this.state.seats, this.state.price, this.state.time, this.state.resort.id, this.props.user.id=8).then(() => {
      this.props.getRides(id)
    })
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
              <button className='book-btn' onClick={() => this.props.bookRide(ride.ride_id, ride.seats, ride.resort_id)}>Book Ride</button>
              <button className='delete-btn' onClick={() => this.props.deleteRide(ride.ride_id, this.props.match.params.id)}>Delete Ride</button>
            </div>
        })}
          
          <div className='add-ride-info'>
            <div>
              <input className='add-ride-input' onChange={ (e) => this.setState({ seats: e.target.value })} placeholder="Seats"></input>
              <input className='add-ride-input' onChange={ (e) => this.setState({ price: e.target.value })} placeholder="Price"></input>
              <input className='add-ride-input' onChange={ (e) => this.setState({ time: e.target.value })} placeholder="Time"></input>
            </div>
              <div>
                <button className='add-ride-btn' onClick={this.handleAddRide}>Add Ride</button>
              </div>
          </div>
    </div>
  )
 }
} 

function mapStateToProps (state) {
  const { resortsObj, user } = state.resorts
  const { rides } = state.rides
  return { resortsObj, rides, user }
}

export default connect(mapStateToProps, { getResorts, getRides, bookRide, addRide, deleteRide })(Resort)