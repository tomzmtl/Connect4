import { connect } from 'react-redux';
import Grid from '../components/Grid';

const mapStateToProps = (state) => ({
  width: state.grid.width,
  height: state.grid.height,
  cellSize: state.grid.cellSize,
});

export default connect(mapStateToProps)(Grid);
