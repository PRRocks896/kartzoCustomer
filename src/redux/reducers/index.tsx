import { combineReducers } from 'redux';

// Import custom components
import auth from './auth';
import category from './category';
import merchant from './merchant'


const rootReducer = combineReducers({
    auth: auth,
    category: category,
    merchant: merchant
});

export default rootReducer;