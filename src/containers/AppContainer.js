import App from "../App";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)