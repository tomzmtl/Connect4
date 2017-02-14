import { connect } from 'react-redux';
import { highlightCell, unhighlightCell, placeTile } from '../actions/grid';
import Tile from '../components/Tile';

const mapStateToProps = (state, ownProps) => {
  const data = state.grid.cells[ownProps.index];

  return {
    data,
    highlighted: {
      x: state.ui.highlight.x === data.x,
      y: state.ui.highlight.y === data.y,
    },
  };
};

const mapDispatchToProps = dispatch => ({
  onTileEnter: (x, y) => {
    dispatch(highlightCell(x, y));
  },
  onTileLeave: (x, y) => {
    dispatch(unhighlightCell(x, y));
  },
  placeTile: (index) => {
    dispatch(placeTile(index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);
