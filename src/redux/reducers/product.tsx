import * as ACTION from "../constant/constant";

const initialState = {
  product: "",
  addcartdata: "",
  getcartdetails: ""
};

const product = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.product.GET_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.productdata,
      };
    case ACTION.product.GET_PRODUCT_FAILURE:
      return {
        ...state,
        product: {},
        error: action.error,
      };

    case ACTION.product.ADD_CART_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.ADD_CART_SUCCESS:
      return {
        ...state,
        addcartdata: action.addtocartdata,
      };
    case ACTION.product.ADD_CART_FAILURE:
      return {
        ...state,
        addcartdata: {},
        error: action.error,
      };

    case ACTION.product.GET_CART_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.GET_CART_SUCCESS:
      return {
        ...state,
        getcartdetails: action.getcartData,
      };
    case ACTION.product.GET_CART_FAILURE:
      return {
        ...state,
        getcartdetails: {},
        error: action.error,
      };

    case ACTION.product.UPDATE_CART_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.UPDATE_CART_SUCCESS:
      return {
        ...state,
        addcartdata: action.updateToCart,
      };
    case ACTION.product.UPDATE_CART_FAILURE:
      return {
        ...state,
        addcartdata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default product;
