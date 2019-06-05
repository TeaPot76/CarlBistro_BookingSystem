import React, {Component} from "react";
import Request from '../../helpers/Request';
import Booking from "./Booking";

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

  //  this.handleInputChange = this.handleInputChange.bind(this);
  }

// componentWillMount(){
//   this.getBookingDetails();


// getBookingDetails(){
//   const request = new Request();
//   let bookingId = this.props.match.params.id;
//   request.get('http://localhost:8080/allbookings/${bookingId}')
//     .then(response => {
//       this.setState({
//         id: response.data.id,
//         name: response.data.name,
//         phone: response.data.phone,
//         booker: response.data.booker,
//         date: response.data.date,
//         time: response.data.time,
//         partySize: response.data.partySize,
//         table: response.data.table,
//         bookingNote: response.data.bookingNote
//
//       }
//     );
//     })
//     .catch(err => console.log(err));
// }
//
// onDelete(booking){
//   const request = new Request();
//   let bookingId = this.state.id;
//   request.delete(('http://localhost:8080/bookings/${bookingId}', booking))
//     .then(response => {
//       this.props.history.push('/');
//     }) .catch(err => console.log(err));
// }
//
//
//
//
//
//   handleSubmit(event) {
//     const request = new Request();
//       const booking = {
//         "date": this.state.date,
//         "time": this.state.time,
//         "partySize": this.state.partySize,
//         "booker": this.state.booker,
//         "seatingTable": this.state.table,
//          "booker": {
//           "name": this.state.name,
//           "phone": this.state.phone},
//
//         "bookingNote": this.state.bookingNote,
//       }
//
//         this.handleBookingEdit(booking)
//         event.preventDefault()
//
//       }
//
//       handleBookingEdit(booking){
//         const request = new Request();
//         request.put(('http://localhost:8080/allbookings/${this.state.id}'),
//           booking)
//           .then(response => {
//             this.props.push('/');
//           }) .catch(err => console.log(err));
//       }
//
//       handleInputChange(evt){
//         const target= evt.target;
//         const value = target.value;
//         const name = target.name;
//         this.setState({
//           [name]: value
//
//         })
//       }
//
//

  render() {
    return (
  <div>
      <h1/>Edit Bookings</h1>

   </div>
//       <React.Fragment>
//       <h1>React Wizard Edit Form 🧙‍♂️</h1>
//       <p>Step {this.state.currentStep} </p>
//
//       <form onSubmit={this.handleSubmit}>
//       {/*
//         render the form steps and pass required props in
//       */}
//         <Step1
//           currentStep={this.state.currentStep}
//           handleChange={this.handleChange}
//           name={this.state.name}
//           phone={this.state.phone}
//         />
//         <Step2
//           currentStep={this.state.currentStep}
//           handleChange={this.handleChange}
//           date={this.state.date}
//           time={this.state.time}
//           partySize={this.state.partySize}
//           partySize={this.state.partySize}
//         />
//         <Step3
//           currentStep={this.state.currentStep}
//           handleChange={this.handleChange}
//           password={this.state.password}
//         />
//          {this.previousButton()}
//          {this.nextButton()}
//
//       </form>
//       </React.Fragment>
//     );
//   }
// }
//
// function Step1(props) {
//   if (props.currentStep !== 1) {
//     return null
//   }
//   return(
//     <div className="form-group">
//       <label htmlFor="name">Customer Name:</label>
//       <input
//         className="form-control"
//         id="name"
//         name="name"
//         type="text"
//         placeholder="Enter Name"
//         value={this.state.name}
//         onChange={this.handleInputChange}
//         required
//         />
//       <label htmlFor="phone">Phone Number:</label>
//       <input
//         className="form-control"
//         id="phone"
//         name="phone"
//         type="number"
//         placeholder="0000 000 0000"
//         value={this.state.phone}
//         onChange={this.handleInputChange}
//         required
//         />
//     </div>
//   );
// }
//
// function Step2(props) {
//   if (props.currentStep !== 2) {
//     return null
//   }
//   return(
//     <div className="form-group">
//       <label htmlFor="date">Date:</label>
//       <input
//         className="form-control"
//         id="date"
//         name="date"
//         type="date"
//
//         value={this.setState.date}
//         onChange={this.handleInputChange}
//         />
//       <label htmlFor="time">Time:</label>
//       <input
//         className="form-control"
//         id="time"
//         name="time"
//         type="time"
//         value={this.state.time}
//         onChange={this.handleInputChange}
//         />
//       <label htmlFor="partySize">Party Size:</label>
//       <input
//         className="form-control"
//         id="partySize"
//         name="partySize"
//         type="number"
//         value={this.state.partySize}
//         onChange={this.handleInputChange}
//         />
//       <label htmlFor="bookingNote">Booking Note:</label>
//       <input
//         className="form-control"
//         id="bookingNote"
//         name="bookingNote"
//         type="text"
//         value={this.state.bookingNote}
//         onChange={this.handleInputChange}
//         />
//
//     </div>
//   );
// }
//
// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null
//   }
//   return(
//     // render radio buttons  based on tables request
//     <React.Fragment>
//     <div className="form-group">
//       <label htmlFor="table">Table:</label>
//       <input
//         className="form-control"
//         id="table-1"
//         name="table"
//         type="table"
//         value={this.state.table}
//         onChange={props.handleChange}
//         />
//     </div>
//     <button className="btn btn-success btn-block">Create Booking</button>
//     </React.Fragment>
//   );

);
}
}


export default EditForm;
