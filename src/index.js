import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store/Store'
import {Provider} from 'react-redux'

console.log("El store shur" )
console.log(store)
ReactDOM.render((

  <Provider store={store}>
      <App />
  </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
