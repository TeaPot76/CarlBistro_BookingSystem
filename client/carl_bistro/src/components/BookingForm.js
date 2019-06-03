import React, {Component} from "react";
import { NavLink } from "react-router-dom";
// import AnimatedWrapper from "../AnimatedWrapper";

class BookingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: "",
      customer_id: "",
      phoneNumber: "",
      numberOfPeople: "",
      date: "",
      time: "",
      table: ""
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

  handleCustomerSubmit(evt) {
    this.props.handleCustomerSubmit(evt.target.value)
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
          <form className="form-inputs" onSubmit={this.handleCustomerSubmit}>
            {/* customer name */}
            <input
              type = "text"
              placeholder = "Customer"
              value = {this.state.customer}
              onChange = {this.handleCustomerChange}
            />
            {/* customer phone number */}
            <input
                type = "number"
                placeholder = "Phone number"
                value = {this.state.phoneNumber}
                onChange = {this.handlePhoneNumberChange}
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


// <input
//   type="number"
//   placeholder="Number of guests"
//   value={this.state.numberOfPeople}
//   onChange={this.handleNumberOfPeopleChange}
// />
//   <input
//     type="text"
//     placeholder="Name"
//     value={this.state.name}
//     onChange={this.handleNameChange}
//   />

//   <input
//     type="time"
//     placeholder="Time"
//     value={this.state.time}
//     onChange={this.handleTimeChange}
//   />
//   <input
//     type="number"
//     placeholder="Table"
//     value={this.state.table}
//     onChange={this.handleTableChange}
//   />