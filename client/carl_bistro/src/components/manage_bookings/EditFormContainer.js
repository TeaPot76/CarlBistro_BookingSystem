import React, {Component} from 'react';
import EditForm from './EditForm';
import Request from '../../helpers/Request';

class EditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: null,
      booker: null,
      table: null
    }
    this.handleReservationEdit = this.handleReservationEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/bookings/" + this.props.id + "?projection=embedCustomer")
      .then((reservation) => {
        this.setState({booking: booking})
      });

    request.get("/bookings/" + this.props.id + "/booker").then((booker) => {
      this.setState({booker: booker})
    })
  }

  handleReservationEdit(reservation){
    if ( this.props.isAvailable(booking.date, booking.time, booking.partySize, booking.bookingNote))
    { //this has to be changed as right now you can't update the numGuest
      const request = new Request();
      request.patch('/bookings/' + this.props.id, booking).then(() => {
        window.location = '/allbookings'
      })
    } else {
      window.alert("Sorry no space, try another timeslot")
    }
  }

  render(){
    if(!this.state.booking || !this.state.booker){
      return <h1>loading</h1>;
    }
    return <EditForm reservation={this.state.booking} customer={this.state.booker} handleReservationEdit= {this.handleReservationEdit} />

  }

}
export default EditFormContainer;
