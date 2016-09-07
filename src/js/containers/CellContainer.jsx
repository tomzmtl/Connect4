import { connect } from 'react-redux';
import { highlightCell, unhighlightCell } from '../actions/counter';
import Cell from '../components/Cell';

const mapStateToProps = (state) => ({
  grid: state.grid,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  onCellEnter: (x, y) => {
    dispatch(highlightCell(x, y));
  },
  onCellLeave: (x, y) => {
    dispatch(unhighlightCell(x, y));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
