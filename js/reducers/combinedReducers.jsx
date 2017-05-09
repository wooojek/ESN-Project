import { combineReducers } from 'redux';

import dataReducer from './dataReducer.jsx';

const reducers = combineReducers({
    data: dataReducer,
});

export default reducers;