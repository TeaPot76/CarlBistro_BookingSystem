import React, {
  Component
} from "react";
// import Request from "../../helpers/Request";
import ImageMapper from 'react-image-mapper';
import ReactTooltip from 'react-tooltip';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
    }
  }

  componentDidMount() {
    const url = 'http://localhost:8080/seatingTables';
    fetch(url)
      .then(res => res.json())
      .then((allTables) => {
          this.setState({
              tables: allTables._embedded.seatingTables,
              hoveredArea: null,
              clickedTable: null,
              msg: null,
              preFill: "yellow",
              moveMsg: null }
            );
          })
  }

    render() {
       return (
         <div className="container">
         <h1> List of tables </h1>

         <p data-tip="hello world">Tooltip</p>
         <ReactTooltip />

             <ImageMapper
              src={require("../../images/map.png")}
              map={{
                name: "my-map",
                areas: [
                  { name: "1", shape: "rect", coords: [43, 98, 105, 131], preFillColor: "pink", fillColor: "green" },
                  { name: "2", shape: "rect", coords: [43, 272, 105, 307], preFillColor: this.state.preFill, fillColor: "blue"  },
                  { name: "3", shape: "rect", coords: [42, 470, 104, 504], preFillColor: "pink", fillColor: "green" },
                  { name: "4", shape: "rect", coords: [41, 648, 105, 687], preFillColor: "pink", fillColor: "green" },
                  { name: "5", shape: "circle", coords: [304, 131, 45], preFillColor: "pink", fillColor: "green" },
                  { name: "6", shape: "circle", coords: [307, 350, 42], preFillColor: "pink", fillColor: "green" },
                  { name: "7", shape: "circle", coords: [302, 586, 43], preFillColor: "pink", fillColor: "green" },
                  { name: "8", shape: "circle", coords: [577, 198, 43], preFillColor: "pink", fillColor: "green" },
                  { name: "9", shape: "rect", coords: [556, 626, 666, 429], preFillColor: "pink", fillColor: "green" }
                ]
              }}
              width={400}
              imgWidth={750}
            	onMouseEnter={area => this.enterArea(area)}
            	onMouseLeave={area => this.leaveArea(area)}
              onClick={area => this.clicked(area)}
              strokeColor= "white"
              lineWidth= {5}
             />

             {
             	this.state.hoveredArea &&
             	<span className="tooltip"
             	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
             		{ this.state.hoveredArea && this.state.hoveredArea.name}
             	</span>
             }

         </div>
       );
     }

     clicked(area) {
       this.setState( {clickedTable: area});
       console.log(area.name);
       this.state.tables.forEach((table) => {
         if (table.tableNumber == area.name) {
           console.log(table);
           this.props.onSelectedTable(area.name);
         }
       })
     }

     enterArea(area) {
         this.setState({ hoveredArea: area });
         this.renderToolTip(area);
     }

     leaveArea(area) {
         this.setState({ hoveredArea: null });
     }

     getTipPosition(area) {
         return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
     }

     renderToolTip(area) {
       return <h1> TEST TOOLTIP</h1>;
     }

    }


  export default TableList;
