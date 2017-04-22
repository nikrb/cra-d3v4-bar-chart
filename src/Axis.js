import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
  componentDidMount = () => {
    this.renderAxis();
  };
  componentDidUpdate = () => {
    this.renderAxis();
  };
  renderAxis = () => {
    if( this.props.orient === "horiz"){
      const haxis = d3.axisBottom( this.props.scale);
      // FIXME: this.refs.axis isn't working here
      haxis( d3.select( '.horiz'));
    } else {
      const haxis = d3.axisLeft( this.props.scale);
      haxis( d3.select( '.vert'));
    }
  };

  render = () => {
    const id = this.props.orient;
    return <g className={id} transform={this.props.translate} ></g>;
  };
}
