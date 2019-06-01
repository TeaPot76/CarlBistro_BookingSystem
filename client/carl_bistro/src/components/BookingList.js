import React from "react";
// import Booking from "./Booking";
import { Link } from "react-router-dom"

const BookingList =(props) => {

    return(
      <div className="booking-list">
        <ul>
            <li>name: {props.customer}</li>
            <li>numberOfPeople: {props.numberOfPeople}</li>
            <li>date: {props.date}</li>
            <li>time: {props.time}</li>
        </ul>
        <Link to="/">Home</Link>
   </div>

    )
  }

export default BookingList;
