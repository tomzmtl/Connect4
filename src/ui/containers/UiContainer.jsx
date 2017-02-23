import { connect } from 'react-redux';
import pick from 'lodash.pick';
import Ui from '../components/Ui';

const mapStateToProps = state => pick(state, ['game', 'players']);

export default connect(mapStateToProps)(Ui);
