import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

const path = "auth";
const enhancer = compose(
  persistState(
    path, {key: "state", slicer: (path) => {
      return (state) => {
        return {auth: state.auth};
      }
    }}
  )
)

const store = createStore(
  reducers,
  applyMiddleware(thunk),
  enhancer
  )

export default store;
