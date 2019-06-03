import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../images/download.jpeg";

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="nav-bar">
                <NavLink exact to="/"><img width="auto" height="100em" alt="Karl's Bistro" src={Logo}></img></NavLink>
                <NavLink exact activeClassName="active-link" className="link" to="newbooking">New Booking</NavLink>
                <NavLink exact activeClassName="active-link" className="link" to="/managebookings">Manage Bookings</NavLink>
                <NavLink exact activeClassName="active-link" className="link" to="/bookinglog">Booking Log</NavLink>
                <NavLink exact activeClassName="active-link" className="link" to="/tablelist">Tables</NavLink>
            </nav>
         );
    }
}
 
export default NavBar;