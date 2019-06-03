import React, {Component} from "react";

class BookerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
  }

  handleCustomerSubmit(event) {
    console.log("customer submit")
    event.preventDefault();
    const name = this.state.name;
    const phone= this.state.phone;
    if (!name || !phone) {
      return
    }
    this.props.onCustomerSubmit({
      name: name,
      phone: phone
    });
    this.setState({
      name: '',
      phone: ''
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phone: event.target.value
    });
  }

  render() {
    return (
      <form className = "booking-form" onSubmit = {this.handleCustomerSubmit}>
        <input
          type = "text"
          placeholder = "Name"
          value = {this.state.name}
          onChange = {this.handleNameChange}
        />
        <input
          type = "number"
          placeholder = "phone"
          value = {this.state.phone}
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

export default BookerForm;
