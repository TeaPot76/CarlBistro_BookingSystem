import React, {
    Component
  } from "react";
import CurrentTableTableList from "./CurrentTableTableList";

  class CurrentTableStatus extends Component {
      constructor(props){
          super(props)
          this.state = {
            orderClicked: false
          }
      }

      handleSubmit = event => {
          return null;
      }
    

      render(){
          return(
              <React.Fragment>
                  <CurrentTableTableList
                    orderClicked={this.state.orderClicked}

                  />
                  <AddOrder
                    orderClicked={this.state.orderClicked}
                    onSubmit={this.handleSubmit}
                  />
              </React.Fragment>
          )
      }
  }


  function AddOrder(props){
    if (props.orderClicked === false) {
        return null
    }
    return(
        <div>
            <h1>Hello, I am menu item order form</h1>
                <form onSubmit={props.onSubmit}>
                    
                </form>
        </div>
    )
  }



  export default CurrentTableStatus;