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
    console.log( "rendering axis");
    var node  = this.refs.axis;
    // var axis = d3.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    // d3.select(node).call( d3.axisBottom( this.props.scale));
    var haxis = d3.axisBottom( this.props.scale)
    // TODO: this.refs.axis isn't working here
    haxis( d3.select( '.axis'));
  };

  render = () => {
    const { left, top} = this.props.settings;
    const translate = `translate( ${left}, ${this.props.height-top})`;
    return <g className="axis" ref="axis" transform={translate} ></g>;
  };
}
