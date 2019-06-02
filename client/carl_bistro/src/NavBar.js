import React from "react";
import {Link} from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="nav-bar">
      <li> <Link className="link" to="/">Home</Link></li>
      <li> <Link className="link" to="/bookings">Bookings</Link> </li>
      <li> <Link className="link" to="/newbooking">NewBooking</Link></li>
      <li> <Link className="link" to="/customers">Customers</Link></li>
      <li> <Link className="link" to="/newcustomers">NewCustomers</Link></li>

    </div>
  )
}

export default NavBar;
