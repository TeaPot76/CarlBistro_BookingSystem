import React, { Component } from 'react';
import NavBar from "../NavBar";
import BookingForm from "./BookingForm";
import { Button, Container, Form, FormGroup, Input, Label } from 'react';
import { Link, withRouter } from 'react-router-dom';


class BookingEditForm extends Component {


      emptyBooking = {
      customer: "",
      phoneNumber: "",
      numberOfPeople: "",
      date: "",
      time: "",
      table: "",
    };


    constructor(props) {
    super(props);
    this.state = {
      item: this.emptyBooking
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // async componentDidMount() {
  //   if (this.props.match.params.id !== 'new') {
  //     const booking = await (await fetch('http://localhost:8080/bookings'${this.props.match.params.id}`)).json();
  //     this.setState({item: booking});
  //   }
  // }

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

    await fetch('http://localhost:8080/bookings', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/bookings');
  }

  render() {
    const {item} = this.state;
    const name = <h2>{item.id ? 'Edit Booking' : 'Add Booking'}</h2>;

    return <div>
      <NavBar/>

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
            <Label for="numberOfPeople">numberOfPeople</Label>
            <Input type="number" name="numberOfPeople" id="numberOfPeople" value={item.numberOfPeople || ''}
                   onChange={this.handleChange} autoComplete="customer-level1"/>
          </BookingForm>
          <BookingForm>
          <Label for="date">date</Label>
          <Input type="date" name="date" id="date" value={item.date || ''}
                 onChange={this.handleChange} autoComplete="customer-level1"/>
        </BookingForm>

        <BookingForm>
        <Label for="time">time</Label>
        <Input type="time" name="time" id="time" value={item.time || ''}
               onChange={this.handleChange} autoComplete="customer-level1"/>
      </BookingForm>

      <BookingForm>
      <Label for="table">table</Label>
      <Input type="number" name="table" id="table" value={item.table || ''}
             onChange={this.handleChange} autoComplete="customer-level1"/>
    </BookingForm>


          <BookingForm>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/groups">Cancel</Button>
          </BookingForm>
        </Form>

    </div>
  }
}

export default BookingEditForm;
