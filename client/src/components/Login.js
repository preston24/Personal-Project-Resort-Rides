import React from 'react'

export default function(props) {
  return (
    <div className="login-page">
      <h1> Resort Rides </h1>
      <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
    </div>
  )
}