import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

import { getResorts, saveUser } from '../redux/reducers/resorts';

 class Resorts extends Component {

  componentDidMount() {
    axios.get('/auth/me').then(response => {
      console.log('response', response)
      this.props.saveUser(response)
    })
    this.props.getResorts()
  }

  render() {
    return (
      <div>
        <div className="resorts-page">
          <h1> Resort Rides </h1>
          <Link to={'/'}><button className="resorts-page-logout-btn">Logout</button></Link>
        </div>
          <div className="resorts-buttons">
            {this.props.resorts.map((resort, index) => {
              return <Link to={`/resorts/${resort.id}`} key={index}><button className="resorts-btn">{resort.resort_name}</button></Link>
            })}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('this is state', state)
  const { resorts } = state.resorts
  return { resorts }
}

export default connect(mapStateToProps, { getResorts, saveUser })(Resorts)
