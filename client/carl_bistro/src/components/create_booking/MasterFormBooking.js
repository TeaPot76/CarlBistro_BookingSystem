import React, {Component} from "react";
import Request from '../../helpers/Request';

import TableList from '../tablelist/TableList';

// not implemented yet - KEEP
class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      name:  '',
      phone: '',
      booker: '',
      partySize: '',
      date: '',
      time: '',
      table: '',
      bookingNote: '',
      areas: [{ name: "1", shape: "rect", coords: [50,185,97,231], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "2", shape: "rect", coords: [125,185,173,231], preFillColor: "#456c3b", fillColor: "#306030"  },
      { name: "3", shape: "rect", coords: [49,273,97,320], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "4", shape: "rect", coords: [125,273,172,320], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "5", shape: "rect", coords: [49,362,98,410], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "6", shape: "rect", coords: [125,362,173,410], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "7", shape: "circle", coords: [265,252,30], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "8", shape: "circle", coords: [265,359,30], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "9", shape: "circle", coords: [267,109,41], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "10", shape: "circle", coords: [385,135,42], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "11", shape: "rect", coords: [372,246,457,390], preFillColor: "#456c3b", fillColor: "#306030" }],
      availableAreas: []
    }
  }


  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleChangePartySize = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    } , ()=>{
      const url2 = `http://localhost:8080/seatingTables/partySize/${this.state.partySize}`; //available tables (capacity only)
      const request = new Request();
      request.get(url2)
      .then((result)=>{
        this.setState({
          availableTables: result
        })
      })
      .then(()=>{
        let newArrayAreas = [];
        if (this.state.partySize === '') {
          return;
        }
        this.state.availableTables.forEach(table => {
          let tableNumberOrAreaIndex = table.tableNumber - 1;
          let areaObject = this.state.areas[tableNumberOrAreaIndex];
          newArrayAreas.push(areaObject);
        })
        this.setState({
          availableAreas: newArrayAreas
        })
      })
    }


    )

  }

  handleTableChoice = tableStateObj => {
    this.setState(tableStateObj);
  }

  // require Spring query for find booker ID by booker phone WORKS
  handleSubmit = event => {
    event.preventDefault()
    const request = new Request();
    const bookerObj = {"name": this.state.name, "phone": this.state.phone};
    request.post('http://localhost:8080/bookers', bookerObj) //WORKS
    .then(()=>{
      request.get(`http://localhost:8080/bookers/phone/${this.state.phone}`)
      .then((result)=>{
        console.log(result[0]); //returns sql ID of booker by query on phone number WORKS

        this.setState({booker: `http://localhost:8080/bookers/${result[0]}`},()=>{
            const bookingObj = {
              "date": this.state.date,
              "time": this.state.time,
              "partySize": this.state.partySize,
              "booker": this.state.booker,
              "seatingTable": this.state.table,
              "bookingNote": this.state.bookingNote
            }
            request.post(`http://localhost:8080/bookings`, bookingObj);
        })
      })
    })
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button
        className="btn btn-secondary"
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button
        className="btn btn-primary float-right"
        type="button" onClick={this._next}>
      Next
      </button>
    )
  }
  return null;
}

  render() {
    return (
      <React.Fragment>
      <div className="page-container">
      <h1>Booking Form:</h1>
      <p>Step {this.state.currentStep} of 3</p>

      <form onSubmit={this.handleSubmit}>
      {/*
        render the form steps and pass required props in
      */}
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          name={this.state.name}
          phone={this.state.phone}
        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          handleChangePartySize={this.handleChangePartySize}
          date={this.state.date}
          time={this.state.time}
          partySize={this.state.partySize}
          bookingNote={this.state.bookingNote}
        />
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          table={this.state.table}
          handleTableChoice={this.handleTableChoice}
          chosenPartySize={this.state.partySize}
          chosenDate={this.state.date}
          chosenTime={this.state.time}
          availableAreas={this.state.availableAreas}
          availableTables={this.state.availableTables}
          onSelectedTable={this.state.onSelectedTable}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </div>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
    <div className="form-group">
      <label htmlFor="name">Customer Name:</label>
      <input
        className="form-control"
        id="name"
        name="name"
        type="text"
        placeholder="Enter Name"
        value={props.name}
        onChange={props.handleChange}
        required
        />
      <label htmlFor="phone">Phone Number:</label>
      <input
        className="form-control"
        id="phone"
        name="phone"
        type="number"
        placeholder="0000 000 0000"
        value={props.phone}
        onChange={props.handleChange}
        required
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(
    <div className="form-group">
      <label htmlFor="date">Date:</label>
      <input
        className="form-control"
        id="date"
        name="date"
        type="date"

        value={props.date}
        onChange={props.handleChange}
        />
      <label htmlFor="time">Time:</label>
      <input
        className="form-control"
        id="time"
        name="time"
        type="time"
        value={props.time}
        onChange={props.handleChange}
        />
      <label htmlFor="partySize">Party Size:</label>
      <input
        className="form-control"
        id="partySize"
        name="partySize"
        type="number"
        value={props.partySize}
        onChange={props.handleChangePartySize}
        default="1"

        />
      <label htmlFor="bookingNote">Booking Note:</label>
      <input
        className="form-control"
        id="bookingNote"
        name="bookingNote"
        type="text"
        value={props.bookingNote}
        onChange={props.handleChange}
        />

    </div>
  );
}

// COULD BE MADE TO HAVE STATE
class Step3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableNumber: '',
      tables: [],
      availableTables: [],


    }
    this.handleTableClicked = this.handleTableClicked.bind(this);
  }

  componentDidMount() {
    const url = `http://localhost:8080/seatingTables`; //all table
    fetch(url)
      .then(res => res.json())
      .then((allTables) => {
          this.setState({
              tables: allTables._embedded.seatingTables,
              hoveredArea: null,
              clickedTable: null,
              msg: null,
              moveMsg: null }
            )
          })

        }

  handleTableClicked(tableNumber){
    this.setState({
      tableNumber: tableNumber
    },()=>{
      this.props.handleTableChoice({
        table: `http://localhost:8080/seatingTables/${this.state.tableNumber}`
      })
    })
  }

  render(){
    if (this.props.currentStep !== 3) {
      return null
    }
    return(
      <React.Fragment>

      <TableList
      availableAreas={this.props.availableAreas}
      availableTables={this.props.availableTables}
      onSelectedTable={this.handleTableClicked}/>
      <button className="btn btn-success btn-block">Create Booking</button>
      </React.Fragment>
    )
  }
}


// function Step3(props) {
  // if (props.currentStep !== 3) {
  //   return null
  // }
//   return(
//     // render radio buttons  based on tables request
//     <React.Fragment>
//     <TableList />
//     <button className="btn btn-success btn-block">Create Booking</button>
//     </React.Fragment>
//   );
// }

export default MasterForm;

{/* <label htmlFor="table">Table:</label>
<input
<div className="form-group">
  className="form-control"
  id="table-1"
  name="table"
  type="table"
  value={this.props.table}
  onChange={this.props.handleChange}
  />
</div> */}
