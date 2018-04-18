import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'

import { getResorts } from '../redux/reducers/resorts';

class Resort extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rides: [],
      resort: {
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

    axios.get(`/api/ride_resort/${id}`).then(response => {
      this.setState({
        rides: response.data
      });
    });
  }

  render() {
  return (
    <div className="resort-page" style={this.state.resort && {backgroundImage: `url(${this.state.resort.img_url})`}}>
      <div>
        <Link to={'/resorts'}><button className="back-btn"> Back to Resorts Page </button></Link>
      </div>

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

function mapStateToProps (state) {
  const { resortsObj } = state.resorts
  return { resortsObj }
}

export default connect(mapStateToProps, { getResorts })(Resort)