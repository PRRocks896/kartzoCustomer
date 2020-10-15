import { combineReducers } from 'redux';

// Import custom components
import auth from './auth';
import category from './category';


const rootReducer = combineReducers({
    auth: auth,
    category: category
});

export default rootReducer;