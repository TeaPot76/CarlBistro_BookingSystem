import React, {Component} from "react";
import { NavLink } from "react-router-dom";
// import AnimatedWrapper from "../AnimatedWrapper";

class BookingForm extends Component {

  constructor() {
    super();
    this.state = {
      customer: "",
      customer_id: "",
      phoneNumber: "",
      numberOfPeople: "",
      date: "",
      time: "",
      table: "",
    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleCustomerIdChange = this.handleCustomerIdChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleNumberOfPeopleChange = this.handleNumberOfPeopleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);

}

componentDidMount(){
  fetch("http://localhost:8080/bookings", {
    method: "GET"
  })
    .then(res => res.json())
    .then(res => this.setState({availableTables: res._embedded.tables}))
    .catch(err => console.log(err))
}

  handleBookingSubmit(event) {
    event.preventDefault();

    const state = this.state;
    const detailsToSubmit = {
    name: state.customer,
    customer_id: state.customer_id,
    phoneNumber: state.phoneNumber,
    numberOfPeople : state.numberOfPeople,
    date: state.date,
    time: state.time,
    table: state.table,


    // this.setState({
    //   customer: "",
    //   phoneNumber: "",
    //   numberOfPeople: "",
    //   date: "",
    //   time: "",
    //   table: "",
    // });
  }

   fetch("hhtp://localhost:8080/bookings", {
    method: "POST",
     body: JSON.stringify(detailsToSubmit),
     headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
     }
   })
     .then(res => res.json())
     .then(data => {this.state.bookingTables.forEach((bookingTable) => {
       let pairingDetails = {
         table_id: bookingTable.id,
         booking: data._links.self.href,
         // table: tables.url
       }
       fetch("http://localhost:8080/pairings", {
         method: "POST",
         body: JSON.stringify(pairingDetails),
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json"
         }
       })
       .catch(err => console.log(err));
     })})
     .catch(err => console.log(err))

   // evt.target.reset();
 }


  handleCustomerChange(event) {
    this.setState({
      customer: event.target.value
    });
  }
  handleCustomerIdChange(event) {
    this.setState({
      customer_id: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handleNumberOfPeopleChange(event) {
    this.setState({
      numberOfPeople: event.target.value
    });
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value
    });
  }

  handleTimeChange(event) {
      this.setState({
       time: event.target.value
      });
    }

    handleTableChange(event) {
        this.setState({
         table: event.target.value
        });
      }




  render() {
    return (
      <div className="page-container">
        <div className="booking-form"> 
          <h1>New Booking</h1>
          <form className="form-inputs" onSubmit = {this.handleBookingSubmit}>
            <input
              type = "text"
              placeholder = "Customer"
              value = {this.state.customer}
              onChange = {this.handleCustomerChange}
            />

            <input
                type = "number"
                placeholder = "Phone number"
                value = {this.state.phoneNumber}
                onChange = {this.handlePhoneNumberChange}
              />
            <input
                type = "number"
                placeholder = "Number of guests"
                value = {this.state.numberOfPeople}
                onChange = {this.handleNumberOfPeopleChange}
              />
              <input
                type = "text"
                placeholder = "Name"
                value = {this.state.name}
                onChange = {this.handleNameChange}
              />

              <input
                type = "time"
                placeholder = "Time"
                value = {this.state.time}
                onChange = {this.handleTimeChange}
              />
              <input
                type = "number"
                placeholder = "Table"
                value = {this.state.table}
                onChange = {this.handleTableChange}
              />

              <input
                id="submit-button"
                type = "submit"
                value = "Post"
              />
            </form>
            <NavLink className="home-link" to="/">Home</NavLink>
          </div> 
        </div> 
    )
  }
}

// const Booking = AnimatedWrapper(BookingForm);
export default BookingForm;
