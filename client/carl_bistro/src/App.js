import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AllBookings from "./components/AllBookings";
import NavBar from "./NavBar";
import BookingForm from "./components/BookingForm";
import BookerForm from "./components/BookerForm";
import Booker from "./components/Booker";
import Home from "./containers/Home";
import BookingEditForm from "./components/BookingEditForm";

class App extends Component {

  render() {
    return (

      <Router>

        <div className="App">
          <NavBar />
          <Route path="/Home" component={Home} />
          <Route path="/bookings" component={AllBookings} />
          <Route path="/newbooking" component={BookingForm} />
          <Route path="/customers" component={Booker} />
          <Route path="/newcustomers" component={BookerForm} />

        </div>
      </Router>
    );
  }
}

export default App;
