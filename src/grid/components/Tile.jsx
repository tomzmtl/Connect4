import React, { PropTypes } from 'react';


const Tile = ({ data, index, onTileEnter, onTileLeave, placeTile, size, player }) => {
  const classNames = ['tile'];

  if (data.highlightedY) {
    classNames.push(`highlight__player-${player}`);
  }

  if (data.owner) {
    classNames.push('owned');
    classNames.push(`owned__player-${data.owner}`);
  }

  const tileProps = {
    className: classNames.join(' '),
    onMouseEnter: () => onTileEnter(data.x),
    onMouseLeave: () => onTileLeave(data.x),
    style: {
      width: size,
      height: size,
    },
  };

  if (!data.owned) {
    tileProps.onClick = () => placeTile(index);
  }

  const innerProps = {
    className: 'inner',
    // style: {
    //   width: size - 2,
    //   height: size - 2,
    // },
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
  placeTile: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
};


export default Tile;
