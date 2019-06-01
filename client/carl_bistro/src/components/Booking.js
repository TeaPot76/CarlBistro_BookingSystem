import React from "react";

import {Link} from 'react-router-dom'

const Booking = (props) => {

  return (
    <div className = "booking">
    <ul>
    <li>{this.props.customer}</li>
    <li>{this.props.numberOfPeople}</li>
    <li>{this.props.date}</li>
    <li>{this.props.time}</li>
    </ul>
   </div>

  )
}

export default Booking;
