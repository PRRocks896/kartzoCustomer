import * as ACTION from "../constant/constant";
import { PlaceOrderAPI } from "../../service/index";
// import { showSuccess, showError } from "../../pages/utils/index";

export const placeOrderService = {
    getAddressList,
    addAddress
};

/** Get Category Request */
function getAddressList(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.getAddressListData(data)
      .then((addressdata: any) => {
        console.log("addressdata", addressdata);
        if (addressdata.status === 200) {
          dispatch(success(addressdata.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addressdata: any) {
    return { type: ACTION.placeOrder.GET_ADDRESS_REQUEST, addressdata };
  }
  function success(addressdata: any) {
    return { type: ACTION.placeOrder.GET_ADDRESS_SUCCESS, addressdata };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.GET_ADDRESS_FAILURE, error };
  }
}

function addAddress(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.addAddressData(data)
      .then((addaddress: any) => {
        console.log("addaddress", addaddress);
        if (addaddress.status === 200) {
          dispatch(success(addaddress.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(addaddress: any) {
    return { type: ACTION.placeOrder.ADD_ADDRESS_REQUEST, addaddress };
  }
  function success(addaddress: any) {
    return { type: ACTION.placeOrder.ADD_ADDRESS_SUCCESS, addaddress };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.ADD_ADDRESS_FAILURE, error };
  }
}

