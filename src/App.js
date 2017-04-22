import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';
import {all, filtered} from './data';
import BarChart from './BarChart';
import XYAxis from './XYAxis';

class App extends Component {
  state = {
    data: filtered,
    tooltip_text: "",
    tooltip_visible: false,
    tooltip_x :0,
    tooltip_y : 0
  };
  handleMouseEnter = (datarow, x, y) => {
    this.setState( { tooltip_text: datarow.name+":"+datarow.total,
      tooltip_visible:true,
      tooltip_x: x, tooltip_y: y});
  };
  handleMouseLeave = () => {
    this.setState( { tooltip_visible: false})
  };
  render = () => {
    const container = { width: 600, height: 400};
    const margin = {top: 20, right: 30, bottom: 30, left: 40};
    const width = container.width - margin.left - margin.right;
    const height = container.height - margin.top - margin.bottom;

    const yScale = d3.scaleLinear()
      .domain( [0, d3.max( this.state.data, d => d.total)])
      .range( [height, 0]);

    const xScale = d3.scaleBand()
      .domain( this.state.data.map( (d) => d.name))
      .range( [0, width]);
      
    const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
      top: margin.top, left: width/2
    };
    const chart_translate = `translate( ${margin.left}, ${margin.top})`;
    return (
      <div className="App">
        <svg className="chart" width={container.width} height={container.height} >
          <BarChart height={height} translate={chart_translate}
            data={this.state.data} xScale={xScale} yScale={yScale}
            handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave} />
          <XYAxis scales={{xScale,yScale}} margins={margin} height={container.height} />
        </svg>
        <div className="tooltip"
          style={tooltip} >
          {this.state.tooltip_text}
        </div>
      </div>
    );
  };
}

export default App;
