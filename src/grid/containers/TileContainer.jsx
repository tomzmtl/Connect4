import { connect } from 'react-redux';
import { highlightCell, unhighlightCell, placeTile } from '../actions/grid';
import Tile from '../components/Tile';

const mapStateToProps = ({ game, grid, ui }, ownProps) => {
  const data = grid.cells[ownProps.index];

  return {
    data,
    highlighted: {
      x: ui.highlight.x === data.x,
      y: ui.highlight.y === data.y,
    },
    game,
  };
};

const mapDispatchToProps = dispatch => ({
  onTileEnter: (x, y) => { dispatch(highlightCell(x, y)); },
  onTileLeave: (x, y) => { dispatch(unhighlightCell(x, y)); },
  placeTile: (index) => { dispatch(placeTile(index)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);
