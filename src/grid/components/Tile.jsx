import React, { PropTypes } from 'react';


const Tile = ({ data, index, onTileEnter, onTileLeave, onTileClick, size }) => {
  let classNames = ['tile'];

  if (data.highlightedY) {
    classNames.push('highlight__y');
  }

  if (data.owner) {
    classNames = classNames.concat(['owned', `player-${data.owner}`]);
  }

  const tileProps = {
    className: classNames.join(' '),
    onMouseEnter: () => onTileEnter(index),
    onMouseLeave: () => onTileLeave(index),
    onClick: () => onTileClick(index),
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
    <div {...tileProps}>
      <div {...innerProps}>
        <span>{index}</span>
      </div>
    </div>);
};

Tile.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onTileEnter: PropTypes.func.isRequired,
  onTileLeave: PropTypes.func.isRequired,
  onTileClick: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};


export default Tile;
