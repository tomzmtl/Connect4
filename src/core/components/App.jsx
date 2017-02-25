import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Grid from '../../grid/containers/GridContainer';
import Ui from '../../ui/containers/UiContainer';
import MainMenu from '../../ui/containers/MainMenu';


const App = ({ game }) => {
  const { draw, locked, player, winner } = game;
  const classes = classnames({
    app: true,
    draw,
    locked,
    [`turn-player-${player}`]: true,
    winner,
    [`winner-${winner}`]: winner,
  });

  return (
    <div id="app" className={classes}>
      <Ui />
      <Grid />
      <MainMenu />
    </div>
  );
};


App.propTypes = {
  game: PropTypes.object.isRequired,
};


export default App;
