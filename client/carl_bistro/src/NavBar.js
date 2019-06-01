import React from "react";
import {Link} from 'react-router-dom';
import RestaurantContainer from "./containers/RestaurantContainer.js";


const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/editcustomer">Customers</Link>
      <Link className="link" to="/newBooking">New Booking</Link>

    </div>
  )
}

export default NavBar;
