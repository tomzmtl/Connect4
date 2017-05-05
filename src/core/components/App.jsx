import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Grid from '../../grid/containers/GridContainer';
import Ui from '../../ui/containers/UiContainer';
import MainMenu from '../../ui/containers/MainMenu';


const App = class extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const { draw, locked, player, winner } = this.props.game;
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
  }
};


App.propTypes = {
  game: PropTypes.object.isRequired,
  initializeApp: PropTypes.func.isRequired,
};


export default App;
