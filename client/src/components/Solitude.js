import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Solitude extends Component {

  render() {
  return (
    <div className="solitude-msg">
      <Link to={'/resorts'}><button className="back-btn"> Back </button></Link>
    </div>
  )
 }
}