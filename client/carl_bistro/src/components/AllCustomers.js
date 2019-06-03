import React, {Component} from "react";
import Request from "../helpers/Request";

import ReactTable from "react-table";
import matchSorter from "match-sorter";
import "react-table/react-table.css";



class AllCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/bookers';
    fetch(url)
      .then(res => res.json())
      .then((bookers) => {
          this.setState({
              bookers: bookers}
            );
          })
      }


    render() {



      return <ReactTable data={this.state.bookers}
                         filterable
                         defaultFilterMethod={(filter, row)=>
                         String(row[filter.id])===filter.value}
                         columns={[


               {  Header: "Name",
                id: "name",
                accessor: d => d.name,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["name"] }),
                filterAll: true
              },

              { Header: "Contact",
               id: "booker.phone",
               accessor: d => d.phone,
               filterMethod: (filter, rows) =>
                 matchSorter(rows, filter.value, { keys: ["phone"] }),
               filterAll: true
             },

             {
               Header: "Number Of Bookings",
               accessor: "id",

               filterMethod: (filter, row ) =>
               row[filter.id].startsWith(filter.value)&&
               row[filter.id].endsWith(filter.value)
             },



               //onClick require the props function redirecting to edit and update booking
              { Header: "Edit" ,
                id: "edit",
                accessor: "id",
                Cell: ({value}) =>(<button onClick={this.setState}>Edit</button>)
              },

              //onClick require the props function redirecting to delete  booking

              { Header: "Delete",
                id: "delete",
                accessor: "id",
                Cell: ({value}) =>(<button onClick={this.setState}>Delete</button>)
              },


             {
                   Header: "Bookings",
                   accessor: "numberOfBookings",
                   id: "over",
                   Cell: ({ value }) => (value = 3 ? "Yes" : "No"),
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
                       <option value="true">More than 3</option>
                       <option value="false">Less than 3</option>
                     </select>
                  }
                ]

                  }
            defaultPageSize={10}
            className="-striped -highlight"



      />
    }

  }

  export default AllCustomers;
