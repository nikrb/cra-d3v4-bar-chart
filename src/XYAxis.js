import React from 'react';
import * as d3 from 'd3';

export default class XYAxis extends React.Component {
  componentDidMount = () => {
    this.renderAxis();
  };
  componentDidUpdate = () => {
    this.renderAxis();
  };
  renderAxis = () => {
    var haxis = d3.axisBottom( this.props.scale)
    // FIXME: this.refs.axis isn't working here
    haxis( d3.select( '.axis'));
  };

  render = () => {
    return <g className="axis" transform={this.props.translate} ></g>;
  };
}
