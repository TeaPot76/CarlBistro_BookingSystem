import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import CreateCustomer from "../components/create_booking/CreateCustomer";
import LandingPage from "../components/home/LandingPage";
import BookingEditForm from "../components/BookingEditForm";


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
    request.post('http://localhost:8080/bookers', customerForm);
  //  this.setState ({
  //    name: name,
  //    phone: phone,
  //  })
 }
      render() {
        return (
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/createcustomer" 
              render={()=><CreateCustomer onCustomerSubmit={this.handleCustomerSubmit}
              randomProp="hello"/>}/>
              <Route exact path="/managebookings" component={BookingEditForm}/>
            </Switch>
          

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
