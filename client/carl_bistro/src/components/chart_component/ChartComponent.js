import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart} from "react-charts";



class ChartComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
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

  render() {
    return (
      <div>
        <h2>Booking Chart</h2>
        <h2>Bookings By Month</h2>
        <Pie data={this.state} />
      </div>
    );
  }
}

export default ChartComponent;
