import { connect } from 'react-redux';
import Root from '../components/Root';

const mapStateToProps = (state) => ({
  grid: state.grid,
  data: state.data,
});

/*
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(incrementCounter());
  },
});
*/

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Root);
