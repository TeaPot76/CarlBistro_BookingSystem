import React, {
    Component
  } from "react";
import CurrentTableTableList from "./CurrentTableTableList";
import Request from '../../helpers/Request';

  class CurrentTableStatus extends Component {
      constructor(props){
          super(props)
          this.state = {
            orderClicked: false,
            occupiedTables: [],
            selectedTable: null
          }
          this.handleClickedTable = this.handleClickedTable.bind(this);
      }

      componentDidMount(){
          const url = `http://localhost:8080/seatingTables`; // all tables
          const request = new Request();
          request.get(url)
          .then((tables)=>{
              this.setState({
                allTables: tables._embedded.seatingTables
              })
          })
      }

      handleClickedTable(object){
          this.setState(object);
      }

      handleSubmit = event => {
          return null;
      }

      _orderClicked = () => {
          if (this.state.orderClicked === false) {
              this.setState({
                  orderClicked: true
              })
          } else {
              this.setState({
                  orderClicked: false
              })
          }
      }

      addOrder(){
        return(
            <button type="button" onClick={this.props.orderButtonClick}>Add Order To Table</button>
        )
      }

      backToTables(){
        return(
            <button type="button" onClick={this._orderClicked}>Back to Table View</button>
        )
      }
    

      render(){
          return(
              <React.Fragment>
                  <CurrentTableTableList
                    orderClicked={this.state.orderClicked}
                    occupiedTables={this.state.allTables} //change back to occupied tables when query successful
                    orderButtonClick={this._orderClicked}
                    handleClickedTable={this.handleClickedTable}
                  />
                  <AddOrder
                    orderClicked={this.state.orderClicked}
                    onSubmit={this.handleSubmit}
                    backToTables={this._orderClicked}
                    selectedTable={this.state.selectedTable}
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
                <button type="button" onClick={props.backToTables}>Back to Table View</button>
        </div>
    )
  }



  export default CurrentTableStatus;