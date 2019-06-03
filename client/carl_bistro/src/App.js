import React, { Component } from 'react';

import RestaurantContainer from './containers/RestaurantContainer';
import NavBar from "./components/home/NavBar";
import './App.css';

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import AllBookings from "./components/AllBookings";
// import BookingForm from "./components/create_booking/CreateCustomer";
// import BookerForm from "./components/create_booking/CreateBooking";
// import Booker from "./components/Booker";
// // import Home from "./containers/Home";
// import LandingPage from "./components/LandingPage";
// import BookingList from "./components/BookingList";
// import BookingEditForm from "./components/BookingEditForm";
// import TableList from "./components/TableList";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Route, Switch} from "react-router-dom";
// import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

function App() {
  return (
    <div className="app">
      <NavBar />
      <RestaurantContainer/>
    </div>
  
  );
}

export default App;
