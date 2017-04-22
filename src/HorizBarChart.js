import React from 'react';

export default class HorizBarChart extends React.Component {
  render = () => {
    const bars = this.props.data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={ndx*this.props.barWidth} y={this.props.yScale( d.total)}
          width={this.props.barWidth-1}
          height={this.props.height - this.props.yScale(d.total)}/>
      );
    });
    const text = this.props.data.map( (d, ndx) => {
      return (
        <text key={ndx} x={0} y={this.props.yScale(d.total)} >
          {d.name}
        </text>
      );
    });

    return (
      <g>
        {bars}
        {text}
      </g>
    );
  };
}
