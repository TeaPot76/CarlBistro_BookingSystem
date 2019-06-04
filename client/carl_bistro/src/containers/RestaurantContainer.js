import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";


import LandingPage from "../components/home/LandingPage";
import TableList from "../components/tablelist/TableList";
import MasterFormBooking from "../components/create_booking/MasterFormBooking";
import AllBookings from "../components/manage_bookings/AllBookings";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
}

      render() {
        return (
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/createbooking" render={()=><MasterFormBooking/>}/>
              <Route exact path="/managebookings"  render={()=><AllBookings/>}/>
              <Route exact path="/tablelist" render={()=><TableList/>}/>
            </Switch>
          </div>
        );
      }

}


  export default RestaurantContainer;

