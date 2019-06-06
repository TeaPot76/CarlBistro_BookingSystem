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
            selectedTable: null,
            selectedBookingUrl: null,
            menu: null,
            item1: 0,
            item2: 0,
            item3: 0,
            item4: 0,
            item5: 0,
            item6: 0,
            item7: 0,
            item8: 0,
            item9: 0,
            item10: 0,
            item11: 0,
            item12: 0
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
              },()=>{
                const url2 = `http://localhost:8080/menuItems`;
                request.get(url2)
                .then((menuItems)=>{
                    this.setState({
                        menu: menuItems._embedded.menuItems
                    })
                })
              })
          })
      }

      handleClickedTable(object){
          this.setState(object,()=>{
            const url = `http://localhost:8080/bookings/today/seatingTable/${this.state.selectedTable}`;
            const request = new Request();
            request.get(url)
            .then((bookings)=>{
                if(bookings.length !== 0){
                    const bookingID = bookings[0].id;
                    this.setState({
                        selectedBookingUrl: `http://localhost:8080/bookings/${bookingID}`
                    })
                }
                
            })
          });
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
                    selectedBookingUrl={this.state.selectedBookingUrl}
                    menu={this.state.menu}
                    item1={this.state.item1}
                    item2={this.state.item2}
                    item3={this.state.item3}
                    item4={this.state.item4}
                    item5={this.state.item5}
                    item6={this.state.item6}
                    item7={this.state.item7}
                    item8={this.state.item8}
                    item9={this.state.item9}
                    item10={this.state.item10}
                    item11={this.state.item11}
                    item12={this.state.item12}
                  />
                  
              </React.Fragment>
          )
      }
  }


  function AddOrder(props){
    if (props.orderClicked === false) {
        return null
    }
    const menuOptions = props.menu.map((menuItem, index) => {
        return (
            <p><label htmlFor={menuItem.name}>{menuItem.name}: </label><input name={menuItem.name}type="number" value="0" key={index+1}/></p>
            // <p><label htmlFor={menuItem.name}>Quantity: </label><input type="number" /></p>
        )
      })
    return(
        <div>
            <h1>Hello, I am menu item order form</h1>
                <form onSubmit={props.onSubmit}>
                    <label htmlFor="menuItem"></label>
                    {menuOptions}
                </form>
                <button type="button" onClick={props.backToTables}>Back to Table View</button>
        </div>
    )
  }



  export default CurrentTableStatus;