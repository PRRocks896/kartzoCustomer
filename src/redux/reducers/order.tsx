import * as ACTION from "../index";

/** intial state */
const initialState = {
  orderdata: "",
  coupondata:""
};

/**
 * 
 * @param state : intial state
 * @param action : action response
 */
const order = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.order.GET_ORDER_REQUEST:
      return {
        ...state,
      };
    case ACTION.order.GET_ORDER_SUCCESS:
      return {
        ...state,
        orderdata: action.getorderdata
      };
    case ACTION.order.GET_ORDER_FAILURE:
      return {
        ...state,
        orderdata: {},
        error: action.error,
      };

      case ACTION.order.GET_COUPON_REQUEST:
      return {
        ...state,
      };
    case ACTION.order.GET_COUPON_SUCCESS:
      return {
        ...state,
        coupondata: action.coupondata
      };
    case ACTION.order.GET_COUPON_FAILURE:
      return {
        ...state,
        coupondata: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default order;
