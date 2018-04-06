import React from 'react'
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <div>
      <div className="resorts-page">
        <h1> Resort Rides </h1>
        <Link to={'/'}><button>Logout</button></Link>
      </div>
        <div className="resorts-buttons">
          <button> Brighton </button>
          <button> Solitude </button> 
          <button> Snowbird </button>
          <button> Alta </button>
          <button> Snowbasin </button>
          <button> Powder Mountain </button>
        </div>
    </div>
  )
}