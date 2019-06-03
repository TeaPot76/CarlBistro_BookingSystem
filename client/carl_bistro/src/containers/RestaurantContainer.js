import React, {Component} from 'react';
import CreateCustomer from "../components/create_booking/CreateCustomer";
// import BookingList from "../components/BookingList";
// import BookerForm from "../components/BookerForm";
import Booker from "../components/Booker";
//import NewBookingList from "../components/NewBookingList";
import Booking from "../components/Booking";
import NavBar from "../NavBar";

import Request from '../helpers/Request';

class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booker: null,
      phone: null,
      tables: [],
      bookings: [],
      date: null,
      time: null,
      name: null,
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
}

 handleBookingSubmit(bookingForm){
   bookingForm.id = Date.now()
   const customer = bookingForm.customer;
   const phone = bookingForm.phone;
   const numberOfPeople = bookingForm.numberOfPeople;
   const date = bookingForm.date;
   const time = bookingForm.time;
   const table = bookingForm.table;
   this.setState ({
     customer: customer,
     phone: phone,
     numberOfPeople: numberOfPeople,
     date: date,
     time: time,
     table: table,
   })

 }

 handleCustomerSubmit(customerForm){
  //  customerForm.id = Date.now()
  //  const name = customerForm.name;
  //  const phone = customerForm.phone;
   const request = new Request();
    request.post('http://localhost:8080/bookers', {
      name: customerForm.customer, 
      phone: customerForm.phoneNumber})
  //  this.setState ({
  //    name: name,
  //    phone: phone,
  //  })

 }
      render() {
        return (
          <div>
          <CreateCustomer onCustomerSubmit={this.handleCustomerSubmit}
          randomProp="hello"/>

          {/* <Booker booker ={this.state.booker.name} /> */}

           {/* <Booking
           customer ={this.state.customer}
           phoneNumber ={this.state.phoneNumber}
           numberOfPeople ={this.state.numberOfPeople}
           date ={this.state.date}
           time ={this.state.time}
           table ={this.state.table}

                        /> */}




          </div>
        );
      }

}


  export default RestaurantContainer;
