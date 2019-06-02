import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AllBookings from "./components/AllBookings";
import NavBar from "./NavBar";
import BookingForm from "./components/BookingForm";
import CustomerForm from "./components/CustomerForm";
import Customer from "./components/Customer";
import Home from "./containers/Home";

class App extends Component {

  render() {
    return (

      <Router>

        <div className="App">
          <NavBar />
          <Route path="/Home" component={Home} />
          <Route path="/bookings" component={AllBookings} />
          <Route path="/newbooking" component={BookingForm} />
          <Route path="/customers" component={Customer} />
          <Route path="/newcustomer" component={CustomerForm} />

        </div>
      </Router>
    );
  }
}

export default App;
