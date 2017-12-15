import { LOGIN, LOGOUT } from '../actions/auth';

const initialState = {
  error: false,
  user: []
}

export default function reducer(state = initialState.user, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        user: action.user
      });
      break;
    case LOGOUT:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state
  }
}
