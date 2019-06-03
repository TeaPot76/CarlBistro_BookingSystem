import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import AllBookings from "./components/AllBookings";
import NavBar from "./NavBar";
import BookingForm from "./components/create_booking/CreateCustomer";
import BookerForm from "./components/create_booking/CreateBooking";
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
import RestaurantContainer from './containers/RestaurantContainer';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      {/* <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/newbooking" component={BookingForm} />
        <Route exact path="/managebookings" component={BookingEditForm}/>
        <Route exact path="/bookinglog" component={BookingList} />
        <Route exact path="/tablelist" component={TableList} />
      </Switch> */}
      <RestaurantContainer/>
    </div>
  
  );
}

export default App;
