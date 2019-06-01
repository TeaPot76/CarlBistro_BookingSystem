import React from "react";

const Booking = (props) => {

    return (
      <div className = "booking" >
        <h4>{this.props.customer}</h4>
        <h4>{this.props.phoneNumber}</h4>
        <li>{this.props.numberOfPeople}</li>
        <li>{this.props.date}</li>
        <li>{this.props.time}</li>
      </div>
    );
  }




export default Booking;
