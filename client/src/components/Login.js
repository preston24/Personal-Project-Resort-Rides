import React from 'react'

export default function(props) {
  return (
    <div className="login-page">
      <h1> Resort Rides </h1>
      <a href="http://localhost:9090/auth"><button>Login</button></a>
    </div>
  )
}




{/* <a onClick={() => axios.get("http://localhost:9090/auth", {headers: { 'Access-Control-Allow-Origin': '*'}}).then(response => console.log('response', response))}><button>Login</button></a> */}