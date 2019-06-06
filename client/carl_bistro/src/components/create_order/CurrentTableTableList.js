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
                src={require("../../images/restaurant.png")}
                map={{
                  name: "my-map",
                  areas: [{ name: "1", shape: "rect", coords: [50,185,97,231], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "2", shape: "rect", coords: [125,185,173,231], preFillColor: "#456c3b", fillColor: "#306030"  },
      { name: "3", shape: "rect", coords: [49,273,97,320], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "4", shape: "rect", coords: [125,273,172,320], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "5", shape: "rect", coords: [49,362,98,410], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "6", shape: "rect", coords: [125,362,173,410], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "7", shape: "circle", coords: [265,252,30], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "8", shape: "circle", coords: [265,359,30], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "9", shape: "circle", coords: [267,109,41], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "10", shape: "circle", coords: [385,135,42], preFillColor: "#456c3b", fillColor: "#306030" },
      { name: "11", shape: "rect", coords: [372,246,457,390], preFillColor: "#456c3b", fillColor: "#306030" }]
                }}
                width={500}
                imgWidth={500}
                onMouseEnter={area => this.enterArea(area)}
                onMouseLeave={area => this.leaveArea(area)}
                onClick={area => this.clicked(area)}
                strokeColor= "white"
                lineWidth= {0}
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
        const tableID = this.state.clickedTable.name;
        this.props.handleClickedTable({selectedTable: tableID})
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
