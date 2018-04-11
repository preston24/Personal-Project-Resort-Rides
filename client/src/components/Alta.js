import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Alta extends Component {

  render() {
  return (
    <div className="alta-msg">
      <Link to={'/resorts'}><button className="back-btn"> Back </button></Link>
    </div>
  )
 }
}