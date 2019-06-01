import React, {Component} from "react";
import { Link } from "react-router-dom"

class BookingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: "",
      numberOfPeople: "",
      date: "",
      time: "",
    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleNumberOfPeopleChange = this.handleNumberOfPeopleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
  }

  handleBookingSubmit(event) {
    event.preventDefault();
    const customer = this.state.customer;
    const numberOfPeople = this.state.numberOfPeople;
    const date = this.state.date;
    const time = this.state.time;
    if (!customer || !numberOfPeople || !date || !time) {
      return
    }
    this.props.onBookingSubmit({
      customer: customer,
      numberOfPeople : numberOfPeople,
      date: date,
      time: time
    });
    this.setState({
      customer: '',
      numberOfPeople: '',
      date: "",
      time: "",
    });
  }

  handleCustomerChange(event) {
    this.setState({
      customer: event.target.value
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


  render() {
    return (
      <div className="booking-form">
        <h1>New Booking</h1>
        <form className = "booking-form" onSubmit = {this.handleSubmit}>
          <input
            type = "text"
            placeholder = "Name"
            value = {this.state.name}
            onChange = {this.handleNameChange}
          />

          <input
              type = "number"
              placeholder = "NameOfPeople"
              value = {this.state.numberOfPeople}
              onChange = {this.handleNumberOfPeopleChange}
            />
            <input
              type = "date"
              placeholder = "date"
              value = {this.state.date}
              onChange = {this.handleDateChange}
            />
            <input
              type = "time"
              placeholder = "number"
              value = {this.state.time}
              onChange = {this.handleTimeChange}
            />

          <input
            id="submit-button"
            type = "submit"
            value = "Post"
          />
        </form>
        <Link to="/">Home</Link>
      </div>  
    )
  }
}


export default BookingForm;
