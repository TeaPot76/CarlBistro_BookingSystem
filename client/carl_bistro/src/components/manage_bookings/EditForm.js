import React, {Component} from "react";
import axios from "axios";
import Booking from "./Booking";
import Request from '../../helpers/Request';

// not implemented yet - KEEP
class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name:  '',
      phone: '',
      booker: '',
      partySize: '',
      date: '',
      time: '',
      table: '',
      bookingNote: ''
    }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }



  componentWillMount(){
   this.getBookingDetails();
 }


   getBookingDetails(){
     let bookingId = this.props.match.params.id;
     axios.get('http://localhost:8080/allbookings/${bookingId}')
      .then(response => {
           this.setState({
              id: response.data.id,
              booker: response.data.booker.name,
              booker: response.data.booker.phone,
              date:  response.data.date,
              time: response.data.time,
              partySize: response.data.partySize,
              seatingTable: response.data.seatingTable,
            }, () =>{console.log(this.state);
            });
           })
           .catch(err => console.log(err));
         }


   handleSubmit(event) {
     const request = new Request();
       const booking = {
         "date": this.state.date,
         "time": this.state.time,
         "partySize": this.state.partySize,
         "booker": this.state.booker,
         "seatingTable": this.state.table,
          "booker": {
           "name": this.state.name,
           "phone": this.state.phone},

         "bookingNote": this.state.bookingNote,
       }

         this.handleBookingEdit(booking)
         event.preventDefault()

       }

       handleBookingEdit(booking){
         const request = new Request();
         request.put(('http://localhost:8080/allbookings/${this.state.id}'),
           booking)
           .then(response => {
             this.props.push('/');
           }) .catch(err => console.log(err));
       }

       handleInputChange(evt){
         const target= evt.target;
         const value = target.value;
         const name = target.name;
         this.setState({
           [name]: value

         })
       }

 //





  render() {
    return (
  <div>

        <form className="reservation-form" onSubmit={this.handleSubmit}>
          <fieldset><legend>Edit a Reservation</legend>

            <label htmlFor="name"><span>Name:</span>
              <input type ="text" ref="name" value={this.state.name} placeholder="name" name="name" required  onChange={this.handleInputChange.bind(this)} />
            </label>
            <label htmlFor="phone"><span>Phone:</span>
              <input type ="text" ref="phone" value={this.state.phone} placeholder="Phone" name="phone" required onChange={this.handleInputChange.bind(this)} />
            </label>
            <label htmlFor="date"><span>Date:</span>
              <input type="date" ref="date" value={this.state.date} placeholder="Date" name="date" onChange={this.handleInputChange.bind(this)}/>
            </label>
            <label><span>Phone Number:</span>
              <input type = "text" ref="phoneNumber" value={this.state.phoneNumber} name="phoneNumber" placeholder="Phone Number" minLength="10" maxLength="11" required  onChange={this.handleInputChange.bind(this)} />
            </label>
            <label><span>Number of Guests:</span>
              <input type="number" ref="partySize" value={this.state.partySize} name="partySize" placeholder="Total Guests" max="15" required onChange={this.handleInputChange.bind(this)}/>
            </label>
            <label><span>Table:</span>
              <input type="number" ref="seatingTable" value={this.state.seatingTable} name="seatingTable" placeholder="Table" max="15" required onChange={this.handleInputChange.bind(this)}/>
            </label>
          </fieldset>
        <input type="submit" value="Save" id="save" />
        <input type="button" value="Go Back" id="go-back" onClick = { () =>  window.location='/'}/>
        </form>
      </div>
    )


}
}


export default EditForm;
