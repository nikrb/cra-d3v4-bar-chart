import React from 'react';

export default class HorizBarChart extends React.Component {
  render = () => {
    const bars = this.props.data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={0} y={ndx*this.props.barHeight}
          width={this.props.xScale(d.total)}
          height={this.props.barHeight-1}/>
      );
    });
    const text = this.props.data.map( (d, ndx) => {
      return (
        <text x={this.props.xScale(d.total)} y={this.props.barHeight*ndx+this.props.barHeight/2} >
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
