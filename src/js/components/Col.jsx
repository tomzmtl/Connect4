import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Cell from './Cell';


const Col = ({ rows }) => {
  return (
    <div className="col">
      {times(rows, (y) => (<Cell key={y} />))}
    </div>
  );
};


Col.propTypes = {
  rows: PropTypes.number.isRequired,
};


export default Col;
