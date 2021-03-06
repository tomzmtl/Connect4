import pick from 'lodash.pick';
import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = state => pick(state, ['game', 'grid', 'ui']);

export default connect(mapStateToProps)(Grid);
