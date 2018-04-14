import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getResorts } from '../redux/reducers/resorts';

// export default function(props) {
//   return (
//     <div>
//       <div className="resorts-page">
//         <h1> Resort Rides </h1>
//         <Link to={'/'}><button className="resorts-page-logout-btn">Logout</button></Link>
//       </div>
//         <div className="resorts-buttons">
//           <Link to={'/brighton'}><button className="brighton-btn"> Brighton </button></Link>
//           <Link to={'/solitude'}><button className="solitude-btn"> Solitude </button></Link>
//           <Link to={'/snowbird'}><button className="snowbird-btn"> Snowbird </button></Link>
//           <Link to={'/alta'}><button className="alta-btn"> Alta </button></Link>
//           <Link to={'/snowbasin'}><button className="snowbasin-btn"> Snowbasin </button></Link>
//           <Link to={'/powderMountain'}><button className="powdermountain-btn"> Powder Mountain </button></Link>
//         </div>
//     </div>
//   )
// }

 class Resorts extends Component {

  componentDidMount() {
    this.props.getResorts()
  }

  render() {
    return (
      this.props.resorts.map((resort, index) => {
        return (
          <Link to={`/resorts/${resort.id}`} key={index}><button className="brighton-btn"> {resort.resort_name} </button></Link>
        )
      })
    )
  }
}

const mapStateToProps = (state) =>{
  const { resorts } = state.resorts
  return { resorts }
}

export default connect(mapStateToProps, { getResorts })(Resorts)
