import { connect } from 'react-redux';
import pick from 'lodash.pick';
import PlayersScreen from '../components/PlayersScreen';


const mapStateToProps = state => pick(state, ['players', 'ui']);


// const mapDispatchToProps = dispatch => ({
//   onClose: () => { dispatch(toggleMainMenu()); },
//   onReset: () => { dispatch(resetGame()); },
//   onEditPlayers: () => { dispatch(togglePlayersScreen()); },
// });


export default connect(mapStateToProps)(PlayersScreen);
