import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PowderMountain extends Component {

  render() {
  return (
    <div className="powdermountain-msg">
      <Link to={'/resorts'}><button className="back-btn"> Back </button></Link>
    </div>
  )
 }
}