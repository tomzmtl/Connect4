import { connect } from 'react-redux';
import pick from 'lodash.pick';
import MainMenuSwitch from '../components/MainMenuSwitch';
import { toggleMainMenu } from '../actions/ui';

const mapStateToProps = state => pick(state, ['ui']);

const mapDispatchToProps = dispatch => ({
  onIconClick: () => {
    dispatch(toggleMainMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuSwitch);
