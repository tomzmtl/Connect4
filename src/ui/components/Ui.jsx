import React, { PropTypes } from 'react';
import '../scss/ui.scss';


const Ui = ({ player, turn }) => (
  <div className="ui">
    <ul>
      <li><strong>Turn:</strong> {turn}</li>
      <li><strong>Player:</strong> {player}</li>
    </ul>
  </div>
);


Ui.propTypes = {
  player: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
};


export default Ui;
