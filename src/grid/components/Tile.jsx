import classnames from 'classnames';
import React, { PropTypes } from 'react';
import { TILE_SIZE } from '../../core/config';


const inWinningCells = (x, y, game) => {
  if (!game.winner) {
    return false;
  }

  return !!game.winningCells.find(c => c.x === x && c.y === y);
};


const Tile = ({ data, index, onTileEnter, onTileLeave, placeTile, highlighted, game }) => {
  const className = classnames({
    tile: true,
    highlight: highlighted.x || highlighted.y,
    owned: data.owner,
    [`owner-player-${data.owner}`]: data.owner,
    winning: inWinningCells(data.x, data.y, game),
  });

  const tileProps = {
    className,
    onMouseEnter: () => onTileEnter(data.x, data.y),
    onMouseLeave: () => onTileLeave(data.x, data.y),
    style: {
      width: TILE_SIZE,
      height: TILE_SIZE,
    },
  };

  if (!data.owned) {
    tileProps.onClick = () => placeTile(index);
  }

  return (
    <div {...tileProps}>
      <div className="inner">
        <span>{index}</span>
      </div>
    </div>
  );
};

Tile.propTypes = {
  data: PropTypes.object.isRequired,
  highlighted: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onTileEnter: PropTypes.func.isRequired,
  onTileLeave: PropTypes.func.isRequired,
  placeTile: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};


export default Tile;
