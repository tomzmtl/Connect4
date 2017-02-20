import pick from 'lodash.pick';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => pick(state, ['game']);

export default connect(mapStateToProps)(App);
