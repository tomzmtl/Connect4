/* eslint-disable jsx-a11y/label-has-for */

import React, { Component, PropTypes } from 'react';
import { playerNames } from '../constants';


class PlayerField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.name };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBlur() {
    const val = this.state.value;
    if (val === '') {
      this.setState({ value: playerNames[this.props.index - 1] });
    }
    this.props.updatePlayerName(this.props.index, val);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const props = {
      className: 'editable',
      maxLength: 14,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      type: 'text',
      value: this.state.value,
    };

    const classes = ['PlayerField', this.props.classes].join(' ');

    return (
      <div className={classes}>
        <div className="cpu-toggle">
          <label>
            <input type="checkbox" checked={this.props.cpu} />
            <span>CPU {this.props.cpu}</span>
          </label>
        </div>
        <span>
          <input {...props} />
        </span>
      </div>
    );
  }
}


PlayerField.propTypes = {
  classes: PropTypes.string.isRequired,
  cpu: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  updatePlayerName: PropTypes.func.isRequired,
};


export default PlayerField;
