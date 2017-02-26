import { connect } from 'react-redux';
import pick from 'lodash.pick';
import Ui from '../components/Ui';
import { updatePlayerName } from '../actions/ui';

const mapStateToProps = state => pick(state, ['game', 'players']);

const mapDispatchToProps = dispatch => ({
  updatePlayerName: (index, name) => { dispatch(updatePlayerName(index, name)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Ui);
