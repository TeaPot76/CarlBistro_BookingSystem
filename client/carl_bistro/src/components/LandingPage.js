import React, { Component } from 'react';
import {Link} from "react-router-dom"

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="landing-page">
                <h1>LandingPage</h1>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/newbooking">New Booking</Link>
                <Link className="link" to="/managebookings">Manage Bookings</Link>
                <Link className="link" to="/bookinglog">Booking Log</Link>
                <Link className="link" to="/tablelist">Tables</Link>
            </div>
            
        );
    }
}
 
export default LandingPage;