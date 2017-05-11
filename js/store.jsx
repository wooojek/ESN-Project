import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import error from './middlewares/error.jsx';

import dataReducer from './reducers/dataReducer.jsx';

const middleware = applyMiddleware(promise(), thunk, logger, error);

const initialState = {
    fetching: true,
    data: {},
    user: {},
}

export default createStore(dataReducer, initialState, middleware);