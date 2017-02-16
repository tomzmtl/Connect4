import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  width: state.grid.width,
  height: state.grid.height,
  highlightX: state.ui.highlight.x,
  winner: state.game.winner,
  player: state.game.player,
});

export default connect(mapStateToProps)(Grid);
