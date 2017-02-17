import React, { PropTypes } from 'react';
import '../scss/ui.scss';


const renderUiElement = (label, value = null, classes = '') => {
  const val = value !== null ? <strong>{value}</strong> : null;
  return (
    <li key={label} className={classes}>
      <span>{label.concat(value !== null ? ':' : '')}</span>
      {val}
    </li>
  );
};


const Ui = ({ player, turn, winner, draw }) => {
  const renderUi = () => {
    if (draw) {
      return renderUiElement('Draw!');
    }

    if (winner) {
      return renderUiElement('Winner', winner);
    }

    return [
      renderUiElement('Turn', turn),
      renderUiElement('Player', player, `player-${player}`),
    ];
  };

  return (
    <div className="ui">
      <ul>
        {renderUi()}
      </ul>
    </div>
  );
};


Ui.propTypes = {
  player: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
  winner: PropTypes.number,
  draw: PropTypes.bool,
};


export default Ui;
