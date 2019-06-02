import React from "react";



const Customer = (props) => {

  return (

              <div className="customer">
              <li>  Customer: {props.name} <br /></li>
              <li>  Phone number: {props.phoneNumber} <br /></li>

              </div>


    )
}

export default Customer;
