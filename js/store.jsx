import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import error from './middlewares/error.jsx';

import reducers from './reducers/combinedReducers.jsx';

const middleware = applyMiddleware(promise(), thunk, logger, error);

export default createStore(reducers, middleware);