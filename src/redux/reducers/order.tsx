import * as ACTION from "../index";

const initialState = {
  orderdata: ""
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

    default:
      return state;
  }
};

export default order;
