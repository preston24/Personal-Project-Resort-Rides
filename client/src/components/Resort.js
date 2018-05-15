import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { getResorts } from '../redux/reducers/resorts';
import { bookRide, getRides, addRide, deleteRide } from '../redux/reducers/rides';
import Modal from './Modal';
import Modal2 from './Modal2';


class Resort extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resort: {
        id: null,
        resort_name: '',
        img_url: ''
      },
      seats: '',
      price: '',
      time: ''
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

    this.props.addRide(this.state.seats, this.state.price, this.state.time, this.state.resort.id, this.props.user.id).then(() => {
      this.setState({seats: '', price: '', time: ''})
      this.props.getRides(id)
    })
  }

  bookRide = (ride) => {
    this.props.bookRide(ride.ride_id, ride.seats, ride.resort_id)
    this.setState({ showBookRideModal: true})
  }

  deleteRide = (ride) => {
    this.props.deleteRide(ride.ride_id, this.props.match.params.id, this.props.user.id)

    if (this.props.user.id !== ride.user_id) {
      this.setState({ showDeleteRideModal: true })
    } else {
      this.setState({ showDeleteRideModal: false })
    }
  }


  render() {
  return (
    <div className="resort-page" style={this.state.resort && {backgroundImage: `url(${this.state.resort.img_url})`}}>
      {this.state.showBookRideModal && <div onClick={() => this.setState({ showBookRideModal: false })}> <Modal/> </div>}
      {this.state.showDeleteRideModal && <div onClick={() => this.setState({ showDeleteRideModal: false })}> <Modal2/> </div>}
      <div>
        <Link to={'/resorts'}><button className="back-btn"> Back to Resorts Page </button></Link>
      </div>

          {this.props.rides.map((ride, index) => {
            return <div className="rides-container" key={index}>
              <div className="rides-info">
                <div>{ride.username}</div>
                <div>Seats-{ride.seats}</div>
                <div>${ride.price}</div>
                <div>{ride.time}</div>
                <button className='book-btn' onClick={() => this.bookRide(ride)}>Book Ride</button>
                <button className='delete-btn' onClick={() => this.deleteRide(ride)}>Delete Ride</button>
              </div>
            </div>
        })}
          
          <div className='add-ride-info'>
            <div>
              <input className='add-ride-input' value={this.state.seats} onChange={ (e) => this.setState({ seats: e.target.value })} placeholder="Seats"></input>
              <input className='add-ride-input' value={this.state.price} onChange={ (e) => this.setState({ price: e.target.value })} placeholder="Price"></input>
              <input className='add-ride-input' value={this.state.time} onChange={ (e) => this.setState({ time: e.target.value })} placeholder="Time"></input>
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