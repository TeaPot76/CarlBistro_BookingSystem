import React, {Component} from "react";

class Booking extends Component {
  render() {
    return (
      <div className = "booking" >
        <h4>{this.props.customer}</h4>
        <li>{this.props.numberOfPeople}</li>
        <li>{this.props.date}</li>
        <li>{this.props.time}</li>
      </div>
    );
  }
}



export default Booking;
