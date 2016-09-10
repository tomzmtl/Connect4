import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = (state) => ({
  width: state.grid.width,
  height: state.grid.height,
  tileSize: state.grid.tileSize,
});

export default connect(mapStateToProps)(Grid);
