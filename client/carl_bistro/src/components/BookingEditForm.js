import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class BookingEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-container">
                <div className="booking-edit-form">
                    <h1>Booking Edit Form goes here</h1>
                    <NavLink className="home-link" to="/">Home</NavLink>
                </div>
            </div>
         );
    }
}
 
export default BookingEditForm;