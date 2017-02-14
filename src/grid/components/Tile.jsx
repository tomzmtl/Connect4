import React, { PropTypes } from 'react';
import { TILE_SIZE } from '../../core/config';


const Tile = ({ data, index, onTileEnter, onTileLeave, placeTile, highlighted }) => {
  const classNames = ['tile'];

  if (highlighted.x || highlighted.y) {
    classNames.push('highlight');
  }

  if (data.owner) {
    classNames.push('owned', `owner-player-${data.owner}`);
  }

  const tileProps = {
    className: classNames.join(' '),
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

  const innerProps = {
    className: 'inner',
  };

  return (
    <div {...tileProps}>
      <div {...innerProps}>
        <span>{index}</span>
      </div>
    </div>);
};

Tile.propTypes = {
  data: PropTypes.object.isRequired,
  highlighted: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onTileEnter: PropTypes.func.isRequired,
  onTileLeave: PropTypes.func.isRequired,
  placeTile: PropTypes.func.isRequired,
};


export default Tile;
