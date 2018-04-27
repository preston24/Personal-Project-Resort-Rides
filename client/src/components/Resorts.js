import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

import { getResorts, saveUser } from '../redux/reducers/resorts';

 class Resorts extends Component {

  componentDidMount() {
    axios.get('/auth/me').then(response => {
      this.props.saveUser(response)
    })
    this.props.getResorts()
  }

  render() {
    return (
      <div>
        <div className="resorts-page">
          <h1> Resort Rides </h1>
          <a href="http://localhost:9090/auth/logout"><button className="resorts-page-logout-btn">Logout</button></a> 
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
  const { resorts } = state.resorts
  return { resorts }
}

export default connect(mapStateToProps, { getResorts, saveUser })(Resorts)