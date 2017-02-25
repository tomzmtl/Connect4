import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PlayerField from './PlayerField';
import { TILE_SIZE } from '../../core/config';


const renderUiElement = (label, value = null, classes = '') => {
  const val = value !== null ? <strong>{value}</strong> : null;
  return (
    <li key={label} className={classes}>
      <span>{label.concat(value !== null ? ':' : '')}</span>
      {val}
    </li>
  );
};


const Ui = ({ game, players }) => {
  const { draw, player } = game;

  const renderUi = () => {
    if (draw) {
      return renderUiElement('Draw!');
    }

    return [1, 2].map((p, index) => {
      const classes = classnames({
        active: player === p,
        player,
        [`p${p}`]: true,
      });
      return (
        <li key={`p${p}`} className={classes}>
          <PlayerField key={index} index={p} name={players[index]} />
        </li>
      );
    });
  };

  const css = { width: TILE_SIZE * 7 };

  return (
    <div className="ui" style={css}>
      <div className="players">
        {renderUi()}
      </div>
      <div className="winner-banner">
        <div className="text">{players[player - 1]} wins!</div>
      </div>
    </div>
  );
};


Ui.propTypes = {
  game: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
};


export default Ui;
