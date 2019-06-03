import React from 'react';
// import RestaurantContainer from './containers/RestaurantContainer';
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import BookingForm from "./components/BookingForm";
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
        <Route exact path="/" 
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <LandingPage {...rest} />}
            </TransitionGroup>
          )}/>
        <Route exact path="/newbooking" component={BookingForm} />
        <Route exact path="/managebookings" component={BookingEditForm}/>
        <Route exact path="/bookinglog" component={BookingList} />
        <Route exact path="/tablelist" component={TableList} />
      </Switch>
    </div>
  
  );
}

export default App;
