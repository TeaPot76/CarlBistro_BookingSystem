import React, {
  Component
} from "react";
import Request from "../helpers/Request";

import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";
import {Chart} from "react-charts";



class BookingChart extends Component {
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
         Date:
        {
         booking.date
         }
         </td>
         <td>
         Time:
         {
           booking.time.slice(0, -3)
         }
         </td>

         <td>
         Party:
          {
           booking.partySize
         }
         </td>



          <button type ="button">edit</button>
          <button type ="button">cancel </button> </tr>

       );

     })


    return <table>{content}</table>


        const lineChart = (
          <div
          style={{
            width: "400px",
            height: "300px"
          }}

        >
<div>
        <Chart data={content} getLabel={series => series.specialLabel} />
</div>;
     <Chart
     data = {content}
     getSeries={data => data.lines}
     getDatums={series => series.data}
     getPrimary={(datum, i, series, seriesIndex, data) => data.axis[i]}
     getSecondary={datum => datum.value}
     // data={[
     //   {
     //     label: "Series 1",
     //     data: [[0,1], [1,2], [2,4], [3,2]]
     //   },
     //   {
     //     label: "Series 2",
     //     data: [[0, 3], [1,1], [2,5], [3,6]]
     //   },
     //
     // ]}
     axes = {[
       {primary: true, type: "linear", position: "bottom"},
       {type: "linear", position: "left" }
     ]}
      />
      </div>
    );

  }
}

  export default BookingChart;
