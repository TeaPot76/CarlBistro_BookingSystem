import React from "react";



const Booker = (props) => {

  return (

              <div className="booker">
              <li>  Customer: {props.name} <br /></li>
              <li>  Phone number: {props.phone} <br /></li>

              </div>


    )
}

export default Booker;
