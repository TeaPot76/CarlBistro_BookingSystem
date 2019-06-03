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
                    <form>
                        <div>
                            <input type="radio"></input>
                        </div>
                        <div>
                            <input type="radio"></input>
                        </div>
                        <div>
                            <input type="radio"></input>
                        </div>
                        <div>
                            <input type="radio"></input>
                        </div>
                        <div>
                            <input type="radio"></input>
                        </div>
                        <div>
                            <input type="radio"></input>
                        </div>
                    </form>   
                </div>
                <Link className="home-link" to="/">Home</Link>
            </div>
            
         );
    }
}
 
export default TableList;