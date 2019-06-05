import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class BookingDetails extends Component{
  constructor(props){
    super(props);
    this.state ={
      bookings: [],
      booking: null
    }
 this.onDelete = this.onDelete.bind(this);
 this.getSingleBooking = this.getSingleBooking.bind(this);

  }
  componentDidMount(){
    this.getBookings();
    // this.getSingleBooking();
  }


  getBookings(){
    // let bookingId = this.props.match.params.name;
    axios.get('http://localhost:8080/allbookings')
     .then(response => {
          this.setState({
              bookings: response.data}, () =>{
                console.log(this.state);
              })
          })
          .catch(err => console.log(err));

}
getSingleBooking(){
  const bookingId = this.state.booking;

  axios.get(`http://localhost:8080/bookings/${bookingId}`)
   .then(response => {
        this.setState({
            booking: response.data}, () =>{
              console.log(this.state);
            })
        })
        .catch(err => console.log(err));

}

  onDelete(evt){
     axios.delete(`http://localhost:8080/bookings/${evt.target.value}` )
      .then(response => {
        this.props.history.push('/');
      }) .catch(err => console.log(err));
  }




    render() {
      let content = this.state.bookings.map((booking) => {
       return (
         <tr>
         <td>
         {
           booking.id
         }
         </td>
         <td>
         {
           booking.booker.name
         }
         </td>
         <td>
          {
         booking.date
         }
         </td>
         <td>
         {
           booking.time
         }
         </td>

         <Link classNAme="btn" value={booking.id} to={{
           pathname: `/bookings/edit/${booking.id}`,
           state: {
             booking: booking
           }
         }}>
             Edit</Link>



        <button onClick={this.onDelete} value={booking.id} className="btn red right">Delete</button>

           </tr>

       );
     })

      return (
          <div className="details-page-container">
            <div className="details-page">
              <h1 className="booking-h1">Edit/Delete</h1>
              <div className="details-table-div">
              <table className="details-table">
                <thead>
                  <th>Id:</th>
                  <th>Name:</th>
                  <th>Date:</th>
                  <th>Time:</th>
                </thead>
                  {content}
              </table>
            </div>
           </div>
        </div>
      )
    }




}

export default BookingDetails;
