import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';
import {all, filtered} from './data';
import HorizBarChart from './HorizBarChart';

class App extends Component {
  state = {
    data: filtered
  };
  render = () => {
    const width = 600;
    const height = 400;
    const barWidth = width/this.state.data.length;

    const yScale = d3.scaleLinear()
      .domain( [0, d3.max( this.state.data, d => d.total)])
      .range( [height, 0]);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <svg className="chart" width={width} height={height} >
          <HorizBarChart height={height} barWidth={barWidth} data={this.state.data} yScale={yScale} />
        </svg>
      </div>
    );
  };
}

export default App;
