import { connect } from 'react-redux';
import Ui from '../components/Ui';

const mapStateToProps = ({ game }) => ({
  game,
});

export default connect(mapStateToProps)(Ui);
