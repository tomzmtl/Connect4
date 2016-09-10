import { connect } from 'react-redux';
import Ui from '../components/Ui';

const mapStateToProps = (state) => ({
  player: state.game.player,
  turn: state.game.turn,
});

export default connect(mapStateToProps)(Ui);
