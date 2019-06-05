import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class BookingDetails extends Component{
  constructor(props){
    super(props);
    this.state ={
      bookings: []
    }
 this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount(){
    this.getBooking();
  }


  getBooking(){
    let bookingId = this.props.match.params.name;
    axios.get('http://localhost:8080/allbookings')
     .then(response => {
          this.setState({
              bookings: response.data}, () =>{
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

         <Link className="btn" to={'/bookings/edit/${this.state.details.id}'}>
        Edit</Link>
        <button onClick={this.onDelete} value={booking.id} className="btn red right">Delete</button>

           </tr>

       );
     })

      return <table><tr><th>Id:</th>
                    <th>Name:</th>
                    <th>Date:</th>
                    <th>Time:</th></tr>

      {content}</table>
    }




}

export default BookingDetails;
