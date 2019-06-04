import React, {
  Component
} from "react";
// import Request from "../../helpers/Request";
import ImageMapper from 'react-image-mapper';
import ReactTooltip from 'react-tooltip';
import Request from '../../helpers/Request';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: []      
    }
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
                areas: this.props.availableAreas
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
       console.log(area);
       this.props.availableTables.forEach((table) => {
         if (table.tableNumber == area.name) {
           console.log(table);
           this.props.onSelectedTable(area.name);
         }
       })
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
