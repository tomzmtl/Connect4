import React, { PropTypes } from 'react';
import '../scss/ui.scss';


const renderUiElement = (label, value) => (<li key={label}><strong>{label}:</strong> {value}</li>);


const Ui = ({ player, turn, winner }) => {
  const renderUi = () => {
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
};


export default Ui;
