import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';
import Root from '../components/Root';

const mapStateToProps = (state) => ({
  grid: state.grid,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(incrementCounter());
  },
  onDecrement: () => {
    dispatch(decrementCounter());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
