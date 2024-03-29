import { combineReducers } from 'redux';

// Import custom components
import auth from './auth';
import category from './category';
import merchant from './merchant';
import product from './product';
import placeOrder from './placeorder';
import order from './order';
import sendpackage from './package';
import footer from './common';

/** Root Reducers */
const rootReducer = combineReducers({
    auth: auth,
    category: category,
    merchant: merchant,
    product:product,
    placeOrder:placeOrder,
    order:order,
    sendpackage:sendpackage,
    footer:footer
});

export default rootReducer;