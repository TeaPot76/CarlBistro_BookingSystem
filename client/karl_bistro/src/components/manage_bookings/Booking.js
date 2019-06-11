import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Booking extends Component{
  constructor(props){
    super(props);
    this.state = {
      booking: this.props.booking
    }
  }

  render(){
    return (
      <li className="bookings">
      <Link to={'/bookings/$this.state.booking.id'}>
      {this.state.booking.booker.name}
      </Link>
      </li>
    )
  }
}

export default Booking;
