import React, {Component} from "react";
import Booking from "./Booking";

const BookingList =(props) => {

    return(
      <div class = "booking-list">
      <ul>
          <li>name: {props.customer}</li>
          <li>numberOfPeople: {props.numberOfPeople}</li>
          <li>date: {props.date}</li>
          <li>time: {props.time}</li>
      </ul>

   </div>

    )
  }





export default BookingList;
