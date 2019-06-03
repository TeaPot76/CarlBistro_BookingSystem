import React, {
  Component
} from "react";
import Request from "../../helpers/Request";
import ImageMapper from 'react-image-mapper';

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
              tables: allTables,
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
       console.log(this.state.tables)
     }
     enterArea(area) {
         this.setState({ hoveredArea: area });
     }

     leaveArea(area) {
         this.setState({ hoveredArea: null });
     }

     getTipPosition(area) {
         return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
     }
    }


  export default TableList;
