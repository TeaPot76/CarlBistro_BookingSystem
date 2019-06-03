import React from "react";
// import BookingForm from "./BookingForm";
// import Booking from "./Booking";
import { NavLink } from "react-router-dom";



const BookingList = (props) => {

  return(
    <div className="page-container">
      <div className = "booking-list" >
        <h1>Booking Log</h1>

        <li>customer: {props.customer}</li>
        <li>phoneNumber: {props.phoneNumber}</li>
        <li>number of people: {props.numberOfPeople}</li>
        <li>date: {props.date}</li>
        <li>time: {props.time}</li>
        <li>table: {props.table}</li>

        <NavLink className="home-link" to="/">Home</NavLink>
      </div>
    </div>
);

}





export default BookingList;
