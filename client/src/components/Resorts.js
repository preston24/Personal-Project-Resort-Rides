import React from 'react'
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <div>
      <div className="resorts-page">
        <h1> Resort Rides </h1>
        <Link to={'/'}><button className="resorts-page-logout-btn">Logout</button></Link>
      </div>
        <div className="resorts-buttons">
          <button className="brighton-btn"> Brighton </button>
          <button className="solitude-btn"> Solitude </button> 
          <button className="snowbird-btn"> Snowbird </button>
          <button className="alta-btn"> Alta </button>
          <button className="snowbasin-btn"> Snowbasin </button>
          <button className="powdermountain-btn"> Powder Mountain </button>
        </div>
    </div>
  )
}