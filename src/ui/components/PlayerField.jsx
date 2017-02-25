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
      onBlur: this.handleBlur,
      type: 'text',
      value: this.state.value,
    };

    return (
      <span className="PlayerField">
        <input {...props} />
      </span>
    );
  }
}


export default PlayerField;
