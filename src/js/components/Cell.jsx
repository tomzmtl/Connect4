import React, { PropTypes } from 'react';
import { CELL_SIZE } from '../config';


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
      width: CELL_SIZE,
      height: CELL_SIZE,
    },
  };

  const innerProps = {
    className: 'inner',
    style: {
      width: CELL_SIZE - 2,
      height: CELL_SIZE - 2,
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
