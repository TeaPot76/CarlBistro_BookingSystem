import React, {
  Component
} from "react";
import Request from "../helpers/Request";
import BookingForm from "./BookingForm";



class AllBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/bookings';
    fetch(url)
      .then(res => res.json())
      .then((allBookings) => {
          this.setState({
              bookings: allBookings}
            );
          })
      }


    render() {
      let content = this.state.bookings.map((booking) => {
       return (


         <tr>
         <td>
        {
         booking.date
         }
         </td>
         <td>
         {
           booking.time.slice(0, -3)
         }
         </td>

         <td>
          {
           booking.partySize
         }
         </td>

         <td>
         {
           booking.seatingTable.tableNumber
         }
         </td>
         <td>
         {
           booking.booker.name
         }
         </td>
         <td>
           {
           booking.booker.phone
         }
         </td>

          <button type ="button">edit</button>
          <button type ="button">cancel</button> </tr>

       );
     })

      return <table> <th>Date</th>
                    <td><th>Time</th></td>
                    <td><th>Party Size</th></td>
                    <td><th>Table Number</th></td>
                    <td><th>Customer Name</th></td>
                    <td><th>Customer Phone</th></td>



      {content}</table>
    }

  }

  export default AllBookings;
