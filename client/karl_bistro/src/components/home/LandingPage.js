import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
// import TransitionGroup from "react-transition-group/TransitionGroup";

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="page-container">
                <div className="landing-page">
                    <h1>Karl's Bistro</h1>
                    <div className="nav-link-container">
                        <div>
                            <NavLink className="link" to="/newbooking">New Booking</NavLink>
                        </div>
                        <div>
                            <NavLink className="link" to="/managebookings">Manage Bookings</NavLink>
                        </div>
                        <div>
                            <NavLink className="link" to="/bookinglog">Booking Log</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default LandingPage;