import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import BarGraph from './BarGraph';

 class Chart extends Component{
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
                   });

}


  render() {
   //  let content = this.state.bookings.map((booking) => {
   //   return (
   //     <div key={this.booking.partySize} > {this.booking.seatingTable.capacity}</div>
   //
   //   )
   // })
   return (
    <div >

    {}
      <BarGraph/>
    </div>





   )

 }

}




export default Chart;
