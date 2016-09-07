import React, { PropTypes } from 'react';
import times from 'lodash.times';
import Cell from '../containers/CellContainer';


const Col = ({ rows, x }) => (
  <div className="col">
    {times(rows, (y) => (<Cell key={y} x={x} y={y} />))}
  </div>
);


Col.propTypes = {
  rows: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
};


export default Col;
