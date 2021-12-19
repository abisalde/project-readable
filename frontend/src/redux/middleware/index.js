import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose } from 'redux';

const logger = createLogger();

let middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, thunk, logger];
} else {
    middleware = [...middleware, thunk];
}

export default compose(applyMiddleware(...middleware));
