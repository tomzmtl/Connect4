import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PlayerField from './PlayerField';


const playerInput = (playerName, i) => {
  const classes = classnames(['player', `p${i}`]);
  return (
    <div className={classes} key={i}>
      <PlayerField index={i} />
    </div>
  );
};
// <span className="editable" contentEditable="true">{playerName}</span>

const Component = ({ players, ui }) => {
  const classes = classnames({
    PlayersScreen: true,
    open: ui.editPlayers,
  });

  const components = players.map((name, i) => playerInput(name, i + 1));

  return (
    <div className={classes}>
      {components}
      <button className="close">Back</button>
    </div>
  );
};


Component.propTypes = {
  players: PropTypes.array.isRequired,
  ui: PropTypes.object.isRequired,
};


export default Component;
