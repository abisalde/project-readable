import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import {Provider} from 'react-redux';
import store from './redux/store';

// CSS
import './index.css';

// Component
// import App from './App';
import Navigation from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
