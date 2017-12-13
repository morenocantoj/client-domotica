import Navigator from '../components/Navigator';
import { connect } from 'react-redux';
import { logout } from '../actions/auth'

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch(logout()) }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator)
