import { connect } from 'react-redux';
import { highlightTile, unhighlightTile, clickTile } from '../actions/grid';
import Tile from '../components/Tile';

const mapStateToProps = (state, ownProps) => ({
  size: state.grid.tileSize,
  player: state.game.player,
  data: state.tiles[ownProps.index],
});

const mapDispatchToProps = (dispatch) => ({
  onTileEnter: (index) => {
    dispatch(highlightTile(index));
  },
  onTileLeave: (index) => {
    dispatch(unhighlightTile(index));
  },
  onTileClick: (index) => {
    dispatch(clickTile(index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);
