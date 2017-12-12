import Login from "../components/Login";
import { connect } from 'react-redux'
import { login } from '../actions/auth'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log("container Rally")
  return {
    login: (username, password) => {dispatch(login(username, password))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
