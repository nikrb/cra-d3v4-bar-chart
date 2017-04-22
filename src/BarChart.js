import React from 'react';

export default class BarChart extends React.Component {
  handleMouseOver = (e) => {

  };
  handleMouseLeave = (e) => {

  };
  render = () => {
    const {data, xScale, yScale, height} = this.props;
    const bars = data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={xScale( d.name)} y={yScale( d.total)}
          width={xScale.bandwidth()-1}
          height={height - yScale(d.total)}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}/>
      );
    });
    // const text = data.map( (d, ndx) => {
    //   return (
    //     <text key={ndx} x={xScale( d.name)+xScale.bandwidth()} y={yScale( d.total)+3} dy={"1em"} >
    //       {d.name}
    //     </text>
    //   );
    // });
    return (
      <g transform={this.props.translate}>
        {bars}
      </g>
    );
  };
}
