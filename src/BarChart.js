import React from 'react';

export default class BarChart extends React.Component {
  handleMouseEnter = function( data, e){
    e.preventDefault();
    e.stopPropagation();
    this.props.handleMouseEnter( data, e.clientX, e.clientY);
  };
  handleMouseLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.handleMouseLeave();
  };
  render = () => {
    const {data, xScale, yScale, height} = this.props;
    const bars = data.map( ( d, ndx) => {
      return (
        <rect key={ndx} x={xScale( d.name)} y={yScale( d.total)}
          width={xScale.bandwidth()-1}
          height={height - yScale(d.total)}
          onMouseEnter={this.handleMouseEnter.bind( this, d)}
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
