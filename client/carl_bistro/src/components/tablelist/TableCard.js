import React from 'react';

const Tablecard = (props) => {
    if (props.table === null) {
        return (
            <></>
        )
    }
    return (
        <div className="table-card">
            <h1>Table Number: {props.table.tableNumber}</h1>
            <h2>Capacity: {props.table.capacity}</h2>
        </div>
    )
} 

export default Tablecard;