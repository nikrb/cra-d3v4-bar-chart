import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';
import {all, filtered} from './data';

class App extends Component {
  state = {
    data: filtered
  };
  render() {
    const width = 400;
    const barHeight = 20;

    const x = d3.scaleLinear()
      .domain( [0, d3.max( this.state.data, d => d.total)])
      .range( [0, width]);

    const bars = this.state.data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={0} y={ndx*barHeight} width={x(d.total)} height={barHeight-1}/>
      );
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <svg className="chart" width={width} height={barHeight * this.state.data.length} >
          {bars}
        </svg>
      </div>
    );
  }
}

export default App;
