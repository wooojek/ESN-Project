import { combineReducers } from 'redux';

import dataReducer from './dataReducer.jsx';
import userReducer from './userReducer.jsx';

const reducers = combineReducers({
    data: dataReducer,
    user: userReducer,
});

export default reducers;