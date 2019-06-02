import React, {Component} from "react";
import Request from "../helpers/Request";
import BookingForm from "./BookingForm";



class AllBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: null,
      customers: null,

    }
    this.handleBookingUpdate = this.handleBookingUpdate.bind(this);
  }

  componentDidMount(){
  const url = 'http://localhost:8080/bookings';
  fetch(url)
  .then(res =>res.json())
  .then((allBookings) => {
    this.setState({bookings: allBookings});
  });
}


  handleBookingUpdate(booking){
    const request = new Request();
    request.patch("/bookings" + this.props.id, booking).then(() => {
      window.location = "/bookings/" + this.props.id
    })
  }

  render(){
    if(!this.state.booking) return null;

    return(
      <div className = "all-bookings">
        <h1>Edit Booking Info</h1>
        <BookingForm
          booking={this.state.booking}
          handleBookingUpdate = {this.handleBookingUpdate}
          allCustomers = {this.state.customers}

        />
      </div>
    )
  }

}

export default AllBookings;
