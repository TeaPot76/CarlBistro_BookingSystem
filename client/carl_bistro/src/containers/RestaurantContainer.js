import React, {Component} from 'react';
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";


class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: null,
      tables: [],
      bookings: [],
      date: new Date(),
      time: null
    }
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
}

 handleBookingSubmit(bookingForm){
   bookingForm.id = Date.now()
   const customer = bookingForm.customer;
   const numberOfPeople = bookingForm.numberOfPeople;
   const date = bookingForm.date;
   const time = bookingForm.time;
   this.setState ({
     customer: customer,
     numberOfPeople: numberOfPeople,
     date: date,
     time: time
   })

 }
      render() {
        return (
          <div className = "restaurant-container" >
            <h2>Bookings</h2>
            <BookingForm onBookingSubmit = {this.handleBookingSubmit}/>

            <BookingList
            customer = {this.state.customer}
            numberOfPeople ={this.state.numberOfPeople}
        
           />

          </div>
        );
      }

}


  export default RestaurantContainer;
