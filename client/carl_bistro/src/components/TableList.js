import React, { Component } from 'react';
import {Link} from "react-router-dom";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-container">
                <div className="table-list">
                    <h1>Table List goes here!</h1>
                    <Link className="home-link" to="/">Home</Link>
                </div>
            </div>
            
         );
    }
}
 
export default TableList;