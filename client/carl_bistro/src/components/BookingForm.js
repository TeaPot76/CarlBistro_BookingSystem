import React, {Component} from "react";

class BookingForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: this.props.customer,
      numberOfPeople: "",
      date: "",
      time: ""
    };

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleNumberOfPeople = this.handleNumberOfPeople.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const customer = this.props.customer;
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
      customer: this.props.customer 
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

  handleTimeChange(event) {
      this.setState({
       time: event.target.value
      });
  }

  render() {
    return (
      <form className = "customer-form" onSubmit = {this.handleSubmit}>
        <input
          type = "text"
          placeholder = "Name"
          value = {this.state.name}
          onChange = {this.handleNameChange}
        />
        <input
          type = "number"
          placeholder = "phoneNumber"
          value = {this.state.phoneNumber}
          onChange = {this.handlePhoneNumberChange}
        />
        <input
          id="submit-button"
          type = "submit"
          value = "Post"
        />
      </form>
    )
  }
}

export default CustomerForm;
