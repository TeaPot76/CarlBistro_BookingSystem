import React from 'react';
// import RestaurantContainer from './containers/RestaurantContainer';
import LandingPage from "./components/LandingPage";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import BookingEditForm from "./components/BookingEditForm";
import './App.css';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/newbooking" component={BookingForm} />
        <Route exact path="/managebookings" component={BookingEditForm}/>
        <Route exact path="/bookinglog" component={BookingList} />
      </Switch>
    </div>
  
  );
}

export default App;
