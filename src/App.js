import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';
import {all, filtered} from './data';
import BarChart from './BarChart';
import XYAxis from './XYAxis';

class App extends Component {
  state = {
    data: filtered
  };
  render = () => {
    const margin = {top: 20, right: 30, bottom: 30, left: 40};
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const yScale = d3.scaleLinear()
      .domain( [0, d3.max( this.state.data, d => d.total)])
      .range( [height, 0]);

    const xScale = d3.scaleBand()
      .domain( this.state.data.map( (d) => d.name))
      .range( [0, width]);

      // <BarChart height={height} translate={translate}
      //   data={this.state.data} xScale={xScale} yScale={yScale} />
    return (
      <div className="App">
        <svg className="chart" width={960} height={500} >
          <XYAxis settings={margin} scale={xScale} height={500} />
        </svg>
      </div>
    );
  };
}

export default App;
