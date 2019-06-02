import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navbar from '../NavBar';

class BookingEdit extends Component {


      existingBooking = {
      customer: "",
      phoneNumber: "",
      numberOfPeople: "",
      date: "",
      time: "",
      table: "",
    };

  // emptyItem = {
  //   name: '',
  //   address: '',
  //   city: '',
  //   stateOrProvince: '',
  //   country: '',
  //   postalCode: ''
  // };

    constructor(props) {
    super(props);
    this.state = {
      item: this.existingBooking
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const booking = await (await fetch(`/api/booking/${this.props.match.params.id}`)).json();
      this.setState({item: booking});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/booking', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/booking');
  }

  render() {
    const {item} = this.state;
    const name = <h2>{item.id ? 'Edit Booking' : 'Add Booking'}</h2>;

    return <div>
      <NavBar/>
      <Container>
        {name}
        <Form onSubmit={this.handleSubmit}>
          <BookingForm>
            <Label for="customer">Customer</Label>
            <Input type="text" name="customer" id="customer" value={item.customer || ''}
                   onChange={this.handleChange} autoComplete="customer"/>
          </BookingForm>
          <BookingForm>
            <Label for="phoneNumber">phoneNumber</Label>
            <Input type="number" name="phoneNumber" id="phoneNumber" value={item.phoneNumber || ''}
                   onChange={this.handleChange} autoComplete="customer-level1"/>
          </BookingForm>
          <BookingForm>
            <Label for="">numberOfPeople</Label>
            <Input type="number" name="numberOfPeople" id="numberOfPeople" value={item.numberOfPeople || ''}
                   onChange={this.handleChange} autoComplete="customer-level1"/>
          </BookingForm>
          <
          <BookingForm>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
          </BookingForm>
        </Form>
      </Container>
    </div>
  }
}

export default BookingForm;
