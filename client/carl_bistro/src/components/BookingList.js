import React, {Component} from "react";
import BookingForm from "./BookingForm";
import Booking from "./Booking";


const BookingList = (props) => {

  return(
  <div className = "booking-form" >

    <li>customer: {props.customer}</li>
    <li>phoneNumber: {props.phoneNumber}</li>
    <li>number of people: {props.numberOfPeople}</li>
    <li>date: {props.date}</li>
    <li>time: {props.time}</li>
    <li>table: {props.table}</li>

  </div>
);

}





export default BookingList;
