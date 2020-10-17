import * as ACTION from "../constant/constant";

const initialState = {
  product: ""
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

    default:
      return state;
  }
};

export default product;
