import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import middleware from '../middleware';

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
