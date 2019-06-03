import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AllBookings from "./components/AllBookings";
import AllCustomers from "./components/AllCustomers";
import NavBar from "./NavBar";
import BookingForm from "./components/BookingForm";
import BookerForm from "./components/BookerForm";
import Booker from "./components/Booker";
// import Home from "./containers/Home";
import LandingPage from "./components/LandingPage";
import BookingList from "./components/BookingList";
import BookingEditForm from "./components/BookingEditForm";
import TableList from "./components/TableList";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Switch} from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/newbooking" component={BookingForm} />
        <Route exact path="/bookings" component={AllBookings}/>
        <Route exact path="/bookinglog" component={BookingList} />
        <Route exact path="/tablelist" component={TableList} />
        <Route exact path="/customers" component={AllCustomers} />

    </Switch>
    </div>

  );
}

export default App;
