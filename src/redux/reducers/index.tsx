import { combineReducers } from 'redux';

// Import custom components
import auth from './auth';


const rootReducer = combineReducers({
    auth: auth
});

export default rootReducer;