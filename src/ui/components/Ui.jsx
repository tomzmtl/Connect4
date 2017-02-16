import React, { PropTypes } from 'react';
import '../scss/ui.scss';


const renderUiElement = (label, value = null) => {
  const val = value !== null ? <span>: {value}</span> : null;
  return (
    <li key={label}>
      <strong>{label}</strong>
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
      renderUiElement('Player', player),
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
