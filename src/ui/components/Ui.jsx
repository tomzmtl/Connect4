import React, { PropTypes } from 'react';


const Ui = ({ player, turn }) => (
  <div className="ui">
    <strong>Turn:</strong> {turn}
    <br />
    <strong>Player:</strong> {player}
  </div>
);


Ui.propTypes = {
  player: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
};


export default Ui;
