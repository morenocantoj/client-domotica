import LoginView from "../views/LoginView";
import { connect } from 'react-redux'
import { login } from '../actions/auth'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {dispatch(login(username, password))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
