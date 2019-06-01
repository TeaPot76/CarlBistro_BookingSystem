import React, {Component} from "react";

class CustomerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phoneNumber:"",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleCustomerSubmit = this.handleCustomerSubmit.bind(this);
  }

  handleCustomerSubmit(event) {
    event.preventDefault();
    const name = this.state.name.trim();
    const phoneNumber = this.state.phoneNumber;
    if (!name || !phoneNumber) {
      return
    }
    this.props.onCustomerSubmit({
      name: name,
      phoneNumber: phoneNumber
    });
    this.setState({
      name: '',
      phoneNumber: ''
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  render() {
    return (
      <form className = "customer-form" onSubmit = {this.handleCustomerSubmit}>
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
