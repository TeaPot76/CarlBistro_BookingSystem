import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart} from "react-charts";



class ChartComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      booker: null,
      bookings: [],
	labels: [
		'June',
		'July',
		'August'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}
};

// componentDidMount() {
//   const url = 'http://localhost:8080/allbookings';
//   fetch(url)
//     .then(res => res.json())
//     .then((allBookings) => {
//         this.setState({
//             bookings: allBookings}
//           );
//         })
//     }

  render() {
   //  let content = this.state.bookings.map((booking) => {
   // return (
   //
   //  <li>
   //   Date:
   //  {
   //   booking.booker.name
   //   }
   // </li>
   //
   //  )

     return (


      <div>

        <h2>Booking Chart</h2>
        <h2>Bookings By Month</h2>
        <Pie data={this.state}/>

        </div>
        // <Pie data={this.state.bookings.map((booking)=>{
        //   return(
        //     booking.booker.name)
        //
        // })} />


)}

}


export default ChartComponent;
