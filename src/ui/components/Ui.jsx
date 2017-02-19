import React, { PropTypes } from 'react';


const renderUiElement = (label, value = null, classes = '') => {
  const val = value !== null ? <strong>{value}</strong> : null;
  return (
    <li key={label} className={classes}>
      <span>{label.concat(value !== null ? ':' : '')}</span>
      {val}
    </li>
  );
};


const Ui = ({ game }) => {
  const { draw, player } = game;

  const renderUi = () => {
    if (draw) {
      return renderUiElement('Draw!');
    }

    return [
      <li key="p1" className="player-1">P1</li>,
      <li key="p2" className="player-2">P2</li>,
    ];
  };

  return (
    <div className="ui">
      <ul>
        {renderUi()}
      </ul>
      <div className="winner-banner">
        <div className="text">P{player} wins!</div>
      </div>
    </div>
  );
};


Ui.propTypes = {
  game: PropTypes.object.isRequired,
};


export default Ui;
