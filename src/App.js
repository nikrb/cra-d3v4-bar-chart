import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {all, filtered} from './data';
import BarChart from './components/BarChart';
import ToolTip from './components/ToolTip';

class App extends Component {
  state = {
    data: all.sort( (a, b) => {
      if( a.total > b.total) return 1;
      else if( a.total < b.total) return -1;
      return 0;
    }),
    tooltip_text: "",
    tooltip_visible: false,
    tooltip_x :0,
    tooltip_y : 0,
    sort_by: "total"
  };
  componentDidMount = () => {
  };
  alphaSort = () => {
    const d = this.state.data.sort( (a,b) => {
      if( a.name > b.name) return 1;
      else if( a.name < b.name) return -1;
      return 0;
    });
    this.setState( { data: d, sort_by: "alpha"});
  };
  totalSort = () => {
    const d = this.state.data.sort( (a,b) => {
      if( a.total > b.total) return 1;
      else if( a.total < b.total) return -1;
      return 0;
    });
    this.setState( {data: d, sort_by: "total"});
  };
  handleMouseEnter = (datarow, x, y) => {
    this.setState( { tooltip_text: datarow.label+":"+datarow.value,
      tooltip_visible:true,
      tooltip_x: x, tooltip_y: y-24});
  };
  handleMouseLeave = () => {
    this.setState( { tooltip_visible: false})
  };
  render = () => {
    const container = { width: 960, height: 500};
    const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
      top: this.state.tooltip_y, left: this.state.tooltip_x
    };
    const chart_data = this.state.data.map( ( item) => {
      return { label: item.name, value: item.total};
    });
    return (
      <div className="App">
        <div className="button-bar">
          Sort
          <button type="button" onClick={this.alphaSort}
            className={this.state.sort_by==="alpha"?"button-active":""} >
            Alpha
          </button>
          <button type="button" onClick={this.totalSort}
            className={this.state.sort_by==="total"?"button-active":""} >
            Total
          </button>
        </div>
        <BarChart height={container.height} width={container.width} data={chart_data}
          handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave} />
        <ToolTip tip_text={this.state.tooltip_text} pos={tooltip} />
      </div>
    );
  };
}

export default App;
