import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store/Store'
import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

ReactDOM.render((

  <Provider store={store}>
    <div>
      <App />
        <ReduxToastr
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar/>
      </div>
  </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
