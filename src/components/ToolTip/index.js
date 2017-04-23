import React from 'react';
import './style.css';

export default class ToolTip extends React.Component {
  render = () => {
    return (
      <div className="tooltip" style={this.props.pos}>
        {this.props.tip_text}
      </div>
    );
  };
}
