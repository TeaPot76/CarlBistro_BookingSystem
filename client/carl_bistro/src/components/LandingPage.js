import React, { Component } from 'react';
import {Link} from "react-router-dom"

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="landing-page">
                <h1>LandingPage</h1>
                <Link to="/">Home</Link>
                <Link to="/newbooking">New Booking</Link>
                <Link to="/managebookings">Manage Bookings</Link>
                <Link to="/bookinglog">Booking Log</Link>
            </div>
            
        );
    }
}
 
export default LandingPage;