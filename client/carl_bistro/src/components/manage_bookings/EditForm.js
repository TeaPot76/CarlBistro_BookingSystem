import React, {Component} from "react";
import axios from "axios";
import Booking from "./Booking";
import Request from '../../helpers/Request';


// not implemented yet - KEEP
class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);


  }

  componentWillMount() {
    this.getBookingDetails();
  }

  getBookingDetails() {
    axios.get(`http://localhost:8080/bookings/${this.props.id}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          booker: response.data.booker.name,
          booker: response.data.booker.phone,
          date:  response.data.date,
          time: response.data.time,
          partySize: response.data.partySize,
          seatingTable: response.data.seatingTable,
        });
      })
    .catch(err => console.log(err));
  }



  handleSubmit(event) {

    event.preventDefault();
    // axios.get(`http://localhost:8080/bookings/${this.props.id}/${this.props.booker}`)
    // .then(response => {
    //   this.setState({booker: booker})
    // })
    axios.get(`http://localhost:8080/bookings/${this.props.id}/${this.props.booker}`)
    .then(response => {
      this.setState({booking: booking})
    })
    const request = new Request();
    const booking = {
      "date": this.state.date,
      "time": this.state.time,
      "partySize": this.state.partySize,
      "booker": `http://localhost:8080/bookers/${this.state.id}`,
      "seatingTable": this.state.table,
      "bookingNote": this.state.bookingNote
    };
    this.handleBookingEdit(booking);
  }

  handleBookingEdit(booking){
    const request = new Request();
    request.patch(`http://localhost:8080/bookings/${this.state.id}`, booking)
      .then(response => {

      })
      .catch(err => console.log(err));
  }

  handleInputChange(evt){
    const target= evt.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form className="reservation-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Edit a Reservation</legend>

            <label htmlFor="name"><span>Name:</span></label>
            <input
              type="text"
              ref="name"
              value={this.state.booker.name}
              placeholder="name"
              name="name"
              required
              onChange={this.handleInputChange.bind(this)}
            />

            <label htmlFor="phone"><span>Phone:</span></label>
            <input
              type="text"
              ref="phone"
              value={this.state.booker.phone}
              placeholder="Phone"
              name="phone"
              required
              onChange={this.handleInputChange.bind(this)}
            />

            <label htmlFor="date"><span>Date:</span></label>
            <input
              type="date"
              ref="date"
              value={this.state.date}
              placeholder="Date"
              name="date"
              onChange={this.handleInputChange.bind(this)}
            />

            <label><span>Time:</span></label>
            <input
              type="time"
              ref="time"
              value={this.state.time}
              name="time"
              placeholder="time"
              minLength="5"
              maxLength="5"
              required
              onChange={this.handleInputChange.bind(this)}
            />

            <label><span>Number of Guests:</span></label>
            <input
              type="number"
              ref="partySize"
              value={this.state.partySize}
              name="partySize"
              placeholder="Total Guests"
              max="15"
              required
              onChange={this.handleInputChange.bind(this)}
            />

            <label><span>Table:</span></label>
            <input
              type="number"
              ref="seatingTable"
              value={this.state.seatingTable.tableNumber}
              name="seatingTable"
              placeholder="Table"
              max="15"
              required
              onChange={this.handleInputChange.bind(this)}
            />
          </fieldset>

          <input type="submit" value="Save" id="save" />
          <input type="button" value="Go Back" id="go-back" onClick = { () =>  window.location='/'}/>
        </form>
      </div>
    );
  }
}

export default EditForm;
