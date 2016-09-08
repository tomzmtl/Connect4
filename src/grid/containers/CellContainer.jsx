import { connect } from 'react-redux';
import { highlightCell, unhighlightCell } from '../actions/grid';
import Cell from '../components/Cell';

const mapStateToProps = (state, ownProps) => ({
  size: state.grid.cellSize,
  data: state.data[ownProps.index],
});

const mapDispatchToProps = (dispatch) => ({
  onCellEnter: (index) => {
    dispatch(highlightCell(index));
  },
  onCellLeave: (index) => {
    dispatch(unhighlightCell(index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
