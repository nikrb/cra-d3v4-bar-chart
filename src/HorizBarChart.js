import React from 'react';

export default class HorizBarChart extends React.Component {
  render = () => {
    const {data, barWidth, yScale, height} = this.props;
    const bars = data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={ndx*barWidth} y={yScale( d.total)}
          width={barWidth-1}
          height={height - yScale(d.total)}/>
      );
    });
    const text = data.map( (d, ndx) => {
      return (
        <text key={ndx} x={barWidth*(ndx+1)-5} y={height-(height-yScale( d.total))} dy={"1em"} >
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
