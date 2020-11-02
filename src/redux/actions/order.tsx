import * as ACTION from "../index";
import { OrderAPI } from "../../service/index";

export const orderService = {
  getOrderList,
};

/**
 *
 * @param data : get card details
 */
function getOrderList(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    OrderAPI.getOrderListData(data)
      .then((getorderdata: any) => {
        // console.log("getorderdata", getorderdata);
        if (getorderdata.status === 200) {
          dispatch(success(getorderdata.resultObject.data));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getorderdata: any) {
    return { type: ACTION.order.GET_ORDER_REQUEST, getorderdata };
  }
  function success(getorderdata: any) {
    return { type: ACTION.order.GET_ORDER_SUCCESS, getorderdata };
  }
  function failure(error: any) {
    return { type: ACTION.order.GET_ORDER_FAILURE, error };
  }
}
