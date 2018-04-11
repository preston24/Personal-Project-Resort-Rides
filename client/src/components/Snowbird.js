import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Snowbird extends Component {

  render() {
  return (
    <div className="snowbird-msg">
      <Link to={'/resorts'}><button className="back-btn"> Back </button></Link>
    </div>
  )
 }
}