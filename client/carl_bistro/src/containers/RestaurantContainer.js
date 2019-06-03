import React, {Component} from 'react';
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import CustomerForm from "../components/CustomerForm";
import Customer from "../components/Customer";
//import NewBookingList from "../components/NewBookingList";
import Booking from "../components/Booking";
import NavBar from "../NavBar";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: null,
      phoneNumber: null,
      tables: [],
      bookings: [],
      date: null,
      time: null,
      name: null,
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
    this.handleCustomersSubmit = this.handleCustomersSubmit.bind(this);
}

 handleBookingSubmit(bookingForm){
   bookingForm.id = Date.now()
   const customer = bookingForm.customer;
   const phoneNumber = bookingForm.phoneNumber;
   const numberOfPeople = bookingForm.numberOfPeople;
   const date = bookingForm.date;
   const time = bookingForm.time;
   const table = bookingForm.table;
   this.setState ({
     customer: customer,
     phoneNumber: phoneNumber,
     numberOfPeople: numberOfPeople,
     date: date,
     time: time,
     table: table,
   })

 }

 handleCustomersSubmit(customerForm){
   customerForm.id = Date.now()
   const name = customerForm.name;
   const phoneNumber = customerForm.phoneNumber;
;
   this.setState ({
     name: name,
     phoneNumber: phoneNumber,

   })

 }
      render() {
        return (
          <div>
          <NavBar/>

           <Booking
           customer ={this.state.customer}
           phoneNumber ={this.state.phoneNumber}
           numberOfPeople ={this.state.numberOfPeople}
           date ={this.state.date}
           time ={this.state.time}
           table ={this.state.table}

                        />

          </div>
        );
      }

}


  export default RestaurantContainer;
