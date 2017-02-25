import { connect } from 'react-redux';
import pick from 'lodash.pick';
import MainMenu from '../components/MainMenu';
import { resetGame } from '../../core/actions/game';


const mapStateToProps = state => pick(state, ['ui']);


const mapDispatchToProps = dispatch => ({
  resetGame: () => { dispatch(resetGame()); },
});


export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
