import React, {
  Component
} from "react";
import ImageMapper from 'react-image-mapper';
import CreateOrderTablecard from "./CreateOrderTableCard";

class CurrentTableTableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      selectedTable: null
    }
  }

    render() {
      if (this.props.orderClicked === true){
        return null;
      }
       return (
        <div className="page-container">
          <div className="table-display-div">
           <div className="tables-container">
            <h1> Tables </h1>
              <ImageMapper
                src={require("../../images/map.png")}
                map={{
                  name: "my-map",
                  areas: [{ name: "1", shape: "rect", coords: [43, 98, 105, 131], preFillColor: "pink", fillColor: "green" },
                  { name: "2", shape: "rect", coords: [43, 272, 105, 307], preFillColor: "pink", fillColor: "blue"  },
                  { name: "3", shape: "rect", coords: [42, 470, 104, 504], preFillColor: "pink", fillColor: "green" },
                  { name: "4", shape: "rect", coords: [41, 648, 105, 687], preFillColor: "pink", fillColor: "green" },
                  { name: "5", shape: "circle", coords: [304, 131, 45], preFillColor: "pink", fillColor: "green" },
                  { name: "6", shape: "circle", coords: [307, 350, 42], preFillColor: "pink", fillColor: "green" },
                  { name: "7", shape: "circle", coords: [302, 586, 43], preFillColor: "pink", fillColor: "green" },
                  { name: "8", shape: "circle", coords: [577, 198, 43], preFillColor: "pink", fillColor: "green" },
                  { name: "9", shape: "rect", coords: [556, 626, 666, 429], preFillColor: "pink", fillColor: "green" }]
                }}
                width={400}
                imgWidth={750}
                onMouseEnter={area => this.enterArea(area)}
                onMouseLeave={area => this.leaveArea(area)}
                onClick={area => this.clicked(area)}
                strokeColor= "white"
                lineWidth= {5}
              />
              <CreateOrderTablecard
              table={this.state.selectedTable}
              orderButtonClick={this.props.orderButtonClick}
              />
                {
                  this.state.hoveredArea &&
                  <span className="tooltip"
                      style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
                  </span>
                }
              </div>
            </div>
         </div>
       );
     }

     clicked(area) {
       this.setState( {clickedTable: area},()=>{
        const tableUrl = `http://localhost:8080/seatingTables/${this.state.clickedTable.name}` 
        this.props.handleClickedTable({selectedTable: tableUrl})
       });
       this.props.occupiedTables.forEach((table) => {
         if (table.tableNumber == area.name) {
            
          //  this.props.onSelectedTable(area.name);

           this.setState({ selectedTable: table }, () => {
            console.log(this.state.selectedTable);
           });
         }
       })
     }

     onClick(area) {
       this.clicked(area);
     }

     enterArea(area) {
         this.setState({ hoveredArea: area });
       this.clicked(area);
     }

     leaveArea(area) {
         this.setState({ hoveredArea: null });
     }

     getTipPosition(area) {
         return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
     }


    }


  export default CurrentTableTableList;
