import React, { PropTypes } from 'react';
import times from 'lodash.times';
import classnames from 'classnames';
import Tile from '../containers/TileContainer';
import { TILE_SIZE } from '../../core/config';
import '../scss/grid.scss';


const renderTiles = (width, height) => {
  const count = width * height;
  return times(count, index => (<Tile index={index} key={index} />));
};


const renderHeader = (width, highlight) =>
  times(width, index => index).map((i) => {
    const classes = highlight === i ? 'highlight' : null;
    return (
      <div style={{ width: TILE_SIZE }} key={i} className={classes}>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 48 48"><path fill="#010101" d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z" /></svg>
      </div>
    );
  });


const Grid = ({ width, height, highlightX, winner, player, draw }) => {
  const classes = classnames({
    'grid-container': true,
    winner,
    [`winner-${winner}`]: winner,
    draw,
    [`turn-player-${player}`]: true,
  });
  return (
    <div className={classes}>
      <div className="grid-header">
        {renderHeader(width, highlightX)}
      </div>
      <div className="grid" style={{ width: TILE_SIZE * width }}>
        {renderTiles(width, height)}
      </div>
    </div>
  );
};


Grid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  highlightX: PropTypes.number,
  winner: PropTypes.number,
  player: PropTypes.number.isRequired,
  draw: PropTypes.bool.isRequired,
};


export default Grid;
