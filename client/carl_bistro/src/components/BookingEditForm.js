import React, { Component } from 'react';
import {Link} from "react-router-dom";

class BookingEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="booking-edit-form">
                <h1>Booking Edit Form goes here</h1>
                <Link to="/">Home</Link>
            </div>
         );
    }
}
 
export default BookingEditForm;