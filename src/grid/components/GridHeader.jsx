import React, { PropTypes } from 'react';
import times from 'lodash.times';
import classnames from 'classnames';
import { TILE_SIZE } from '../../core/config';


const renderHeaderCols = ({ width, highlight, locked }) =>
  times(width, index => index).map((i) => {
    const classes = classnames({
      highlight: !locked && highlight === i,
    });

    return (
      <div style={{ width: TILE_SIZE }} key={i} className={classes}>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 48 48"><path fill="#010101" d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z" /></svg>
      </div>
    );
  });

const GridHeader = props => (
  <div className="grid-header" style={{ width: TILE_SIZE * props.width }}>
    {renderHeaderCols(props)}
  </div>
);

GridHeader.propTypes = {
  width: PropTypes.number.isRequired,
};

export default GridHeader;
