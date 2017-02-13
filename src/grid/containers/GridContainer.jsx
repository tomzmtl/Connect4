import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  width: state.grid.width,
  height: state.grid.height,
});

export default connect(mapStateToProps)(Grid);
