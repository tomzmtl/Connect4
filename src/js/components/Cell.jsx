import React, { PropTypes } from 'react';


const Cell = ({ data, index, onCellEnter, onCellLeave }) => {
  const classNames = ['cell'];

  if (data.highlightedX) {
    classNames.push('highlight__x');
  }

  if (data.highlightedY) {
    classNames.push('highlight__y');
  }

  const props = {
    className: classNames.join(' '),
    onMouseEnter: () => onCellEnter(index),
    onMouseLeave: () => onCellLeave(index),
    style: {
      width: 50,
      height: 50,
    },
  };

  const innerProps = {
    className: 'inner',
    style: {
      width: 50 - 2,
      height: 50 - 2,
    },
  };

  return (
    <div {...props}>
      <div {...innerProps}>
        <span>{index}</span>
      </div>
    </div>);
};

Cell.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onCellEnter: PropTypes.func.isRequired,
  onCellLeave: PropTypes.func.isRequired,
};


export default Cell;
