import * as ACTION from "../index";

/** intial state */
const initialState = {
  product: "",
  addcartdata: "",
  getcartdetails: "",
  searchdata: "",
  searchproduct: "",
  updatecart: "",
  deletecart: "",
  refunddata: "",
  addratingdata: "",
  ratingdata: "",
};

/**
 *
 * @param state : intial state
 * @param action : action response
 */
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
        updatecart: action.updateToCart,
      };
    case ACTION.product.UPDATE_CART_FAILURE:
      return {
        ...state,
        updatecart: {},
        error: action.error,
      };

    case ACTION.product.SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        searchdata: action.searchdata,
      };
    case ACTION.product.SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        searchdata: {},
        error: action.error,
      };

    case ACTION.product.SEARCH_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.SEARCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        searchproduct: action.searchdatadetail,
      };
    case ACTION.product.SEARCH_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        searchproduct: {},
        error: action.error,
      };

    case ACTION.product.DELETE_CART_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.DELETE_CART_SUCCESS:
      return {
        ...state,
        deletecart: action.removedata,
      };
    case ACTION.product.DELETE_CART_FAILURE:
      return {
        ...state,
        deletecart: {},
        error: action.error,
      };

    case ACTION.product.CANCEL_ORDER_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        refunddata: action.cancelorder,
      };
    case ACTION.product.CANCEL_ORDER_FAILURE:
      return {
        ...state,
        refunddata: {},
        error: action.error,
      };

    case ACTION.product.ADD_RATING_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.ADD_RATING_SUCCESS:
      return {
        ...state,
        addratingdata: action.addrating,
      };
    case ACTION.product.ADD_RATING_FAILURE:
      return {
        ...state,
        addratingdata: {},
        error: action.error,
      };

    case ACTION.product.GET_RATING_DATA_REQUEST:
      return {
        ...state,
      };
    case ACTION.product.GET_RATING_DATA_SUCCESS:
      return {
        ...state,
        ratingdata: action.getratingdata,
      };
    case ACTION.product.GET_RATING_DATA_FAILURE:
      return {
        ...state,
        ratingdata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default product;
