import { connect } from 'react-redux';
import pick from 'lodash.pick';
import MainMenu from '../components/MainMenu';
import { toggleMainMenu } from '../actions/ui';
import { resetGame } from '../../core/actions/game';


const mapStateToProps = state => pick(state, ['ui']);

const mapDispatchToProps = dispatch => ({
  onClose: () => { dispatch(toggleMainMenu()); },
  onReset: () => { dispatch(resetGame()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
