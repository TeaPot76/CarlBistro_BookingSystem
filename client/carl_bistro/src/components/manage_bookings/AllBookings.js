import React, {
  Component
} from "react";
import Request from "../../helpers/Request";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";
import EditForm from "./EditForm";



class AllBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/allbookings';
    fetch(url)
      .then(res => res.json())
      .then((allBookings) => {
          this.setState({
              bookings: allBookings}
            );
          })
      }



    render() {

      return (

        <div className="all-bookings">
          <h1 className="booking-h1">Booking Log</h1>
         <ReactTable data={this.state.bookings}
           filterable
           defaultFilterMethod={(filter, row)=>
           String(row[filter.id])===filter.value}
           columns={[
             {
               Header: "Date",
               accessor: "date",
               filterMethod: (filter, rows ) =>
               matchSorter(rows, filter.value, {keys: ["date"]}),
               filterAll: true
             },

             {
                Header: "Time",
                id: "time",
                accessor: d => d.time,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["time"] }),
                filterAll: true
            },
             {  Header: "Party Size",
                id: "partySize",
                accessor: d => d.partySize,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["partySize"] }),
                filterAll: true
            },
                {  Header: "Table #",
                 id: "tableNumber",
                 accessor: d => d.seatingTable.tableNumber,
                 filterMethod: (filter, rows) =>
                   matchSorter(rows, filter.value, { keys: ["tableNumber"] }),
                 filterAll: true
               },
               {  Header: "Name",
                id: "name",
                accessor: d => d.booker.name,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["name"] }),
                filterAll: true
              },

              { Header: "Contact",
               id: "phone",
               accessor: d => d.booker.phone,
               filterMethod: (filter, rows) =>
                 matchSorter(rows, filter.value, { keys: ["phone"] }),
               filterAll: true
             },

              { Header: "Edit" ,
                id: "edit",
                accessor: "id",
                Cell: ({value}) =>(<button onClick={this.setState}>Edit</button>)
              },

              { Header: "Delete",
                id: "delete",
                accessor: "id",
                Cell: ({value}) =>(<button onClick={this.setState}>Delete</button>)
              },


             {
                   Header: "Bookings",
                   accessor: "date",
                   id: "over",
                   Cell: ({ value }) => (value > Date.now() ? "Upcoming" : "Past"),
                   filterMethod: (filter, row) => {
                     if (filter.value === "all") {
                       return true;
                     }
                     if (filter.value === "true") {
                       return row[filter.id] >= 3;
                     }
                     return row[filter.id] < 3;
                   },
                   Filter: ({ filter, onChange }) =>
                     <select
                       onChange={event => onChange(event.target.value)}
                       style={{ width: "100%" }}
                       value={filter ? filter.value : "all"}
                     >
                       <option value="all">Show All</option>
                       <option value="true">Booking History</option>
                       <option value="false">Upcoming Bookings</option>
                     </select>
                  }
                ]


     }
            defaultPageSize={10}
            className="-striped -highlight"
      />
        </div>
      )
    }

  }

  export default AllBookings;
