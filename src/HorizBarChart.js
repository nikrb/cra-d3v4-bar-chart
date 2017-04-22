import React from 'react';

export default class HorizBarChart extends React.Component {
  render = () => {
    const {data, xScale, yScale, height} = this.props;
    const bars = data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={xScale( d.name)} y={yScale( d.total)}
          width={xScale.bandwidth()}
          height={height - yScale(d.total)}/>
      );
    });
    const text = data.map( (d, ndx) => {
      return (
        <text key={ndx} x={xScale( d.name)+xScale.bandwidth()} y={yScale( d.total)+3} dy={"1em"} >
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
