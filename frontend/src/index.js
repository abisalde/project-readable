import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import {Provider} from 'react-redux';
import store from './redux/store';

// CSS
import './assets/css/index.css';

// Component
import Navigation from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
