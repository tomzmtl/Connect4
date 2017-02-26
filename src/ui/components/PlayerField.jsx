import React, { Component } from 'react';


class PlayerField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.name };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const props = {
      className: 'editable',
      maxLength: 20,
      onChange: this.handleChange,
      onBlur: () => this.props.updatePlayerName(this.props.index, this.state.value),
      type: 'text',
      value: this.state.value,
    };

    const classes = 'PlayerField '.concat(this.props.classes);

    return (
      <span className={classes}>
        <input {...props} />
      </span>
    );
  }
}


export default PlayerField;
