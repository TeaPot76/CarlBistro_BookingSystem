import React, {
  Component
} from "react";


import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";
import {Chart} from "react-charts";
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';


const BarGraph = (props) => {
 const data = {
 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
 datasets: [
 {
   label: 'Bookings by Month',
   fill: false,
   lineTension: 0.1,
   backgroundColor: 'rgba(189,192,192,1.4)',
   borderColor: 'rgba(175,192,192,1)',
   borderCapStyle: 'butt',
   borderDash: [],
   borderDashOffset: 0.0,
   borderJoinStyle: 'miter',
   pointBorderColor: 'rgba(375,192,192,1)',
   pointBackgroundColor: '#fff',
   pointBorderWidth: 1,
   pointHoverRadius: 5,
   pointHoverBackgroundColor: 'rgba(275,192,192,1)',
   pointHoverBorderColor: 'rgba(220,220,220,1)',
   pointHoverBorderWidth: 2,
   pointRadius: 1,
   pointHitRadius: 10,
   data: [0, 1, 1, 2, 2, 5, 10]
 }
]
};

  return(
  <Bar data ={data} />
)
}


  export default BarGraph;
