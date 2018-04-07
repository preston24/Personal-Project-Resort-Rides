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
          <Link to={'/brighton'}><button className="brighton-btn"> Brighton </button></Link>
          <Link to={'/solitude'}><button className="solitude-btn"> Solitude </button></Link>
          <Link to={'/snowbird'}><button className="snowbird-btn"> Snowbird </button></Link>
          <Link to={'/alta'}><button className="alta-btn"> Alta </button></Link>
          <Link to={'/snowbasin'}><button className="snowbasin-btn"> Snowbasin </button></Link>
          <Link to={'/powderMountain'}><button className="powdermountain-btn"> Powder Mountain </button></Link>
        </div>
    </div>
  )
}