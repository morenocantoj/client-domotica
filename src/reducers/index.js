import { combineReducers } from 'redux';
import auth from './auth';
import {reducer as toastrReducer} from 'react-redux-toastr';

const reducers = combineReducers({
  // ... other reducers ...
  toastr: toastrReducer, // <- Mounted at toastr.
  auth
})

export default reducers;
