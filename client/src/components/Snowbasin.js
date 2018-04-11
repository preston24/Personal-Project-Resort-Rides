import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Snowbasin extends Component {

  render() {
  return (
    <div className="snowbasin-msg">
      <Link to={'/resorts'}><button className="back-btn"> Back </button></Link>
    </div>
  )
 }
}