import pick from 'lodash.pick';
import { connect } from 'react-redux';
import App from '../components/App';
import { initializeApp } from '../actions/game';

const mapStateToProps = state => pick(state, ['game']);

const mapDispatchToProps = dispatch => ({
  initializeApp: () => { dispatch(initializeApp()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
