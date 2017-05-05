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


const Ui = ({ game, players, updatePlayerName }) => {
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

      const props = {
        classes,
        cpu: players[index].cpu,
        index: p,
        key: index,
        name: players[index].name,
        updatePlayerName,
      };

      return (
        <PlayerField {...props} />
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
        <div className="text">{players[player - 1].name} wins!</div>
      </div>
    </div>
  );
};


Ui.propTypes = {
  game: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  updatePlayerName: PropTypes.func.isRequired,
};


export default Ui;
