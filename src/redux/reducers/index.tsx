import { combineReducers } from 'redux';

// Import custom components
import auth from './auth';
import category from './category';
import merchant from './merchant';
import product from './product'


const rootReducer = combineReducers({
    auth: auth,
    category: category,
    merchant: merchant,
    product:product
});

export default rootReducer;