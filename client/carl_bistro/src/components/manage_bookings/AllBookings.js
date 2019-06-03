import React, {
  Component
} from "react";
import Request from "../../helpers/Request";
import BookingForm from "../create_booking/CreateCustomer";



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
         Name: {
           booking.booker.name
         }
         </td>
         <td>
         Name: {
           booking.booker.phone
         }
         </td>
         <td>
         Booking Date: {
         booking.date
         }
         </td>
         <td>
         Time: {
           booking.time
         }
         </td>
         <td>
         Table: {
           booking.seatingTable.tableNumber
         }
         </td>

           </tr>

       );
     })

      return <table>{content}</table>
    }

  }

  export default AllBookings;
