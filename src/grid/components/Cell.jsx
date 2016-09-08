import React, { PropTypes } from 'react';


const Cell = ({ data, index, onCellEnter, onCellLeave, size }) => {
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
      width: size,
      height: size,
    },
  };

  const innerProps = {
    className: 'inner',
    style: {
      width: size - 2,
      height: size - 2,
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
  size: PropTypes.number.isRequired,
};


export default Cell;
