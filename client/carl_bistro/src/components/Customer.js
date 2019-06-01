import React from "react";



const Customer = (props) => {

  return (
            <Link to={`/editcustomer/${props.customer.id}`} className="customerLink">
              <div className="customer">
                Customer: {props.customer.name} <br />
                Customer: {props.customer.phoneNumber} <br />

              </div>
            </Link>

    )
}

export default Customer;
