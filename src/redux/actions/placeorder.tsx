import * as ACTION from "../constant/constant";
import { PlaceOrderAPI } from "../../service/index";
// import { showSuccess, showError } from "../../pages/utils/index";

export const placeOrderService = {
  getAddressList,
  addAddress,
  updateAddress,
  deleteAddress,
};

/** Get Category Request */
function getAddressList(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.getAddressListData(data)
      .then((addressdata: any) => {
        // console.log("addressdata", addressdata);
        if (addressdata.status === 200) {
          dispatch(success(addressdata.resultObject));
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
        // console.log("addaddress", addaddress);
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

function updateAddress(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.updateAddress(data)
      .then((updateaddress: any) => {
        console.log("updateaddress", updateaddress);
        if (updateaddress.status === 200) {
          dispatch(success(updateaddress.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(updateaddress: any) {
    return { type: ACTION.placeOrder.EDIT_ADDRESS_REQUEST, updateaddress };
  }
  function success(updateaddress: any) {
    return { type: ACTION.placeOrder.EDIT_ADDRESS_SUCCESS, updateaddress };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.EDIT_ADDRESS_FAILURE, error };
  }
}

function deleteAddress(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PlaceOrderAPI.deleteAddress(data)
      .then((deleteaddress: any) => {
        console.log("deleteaddress", deleteaddress);
        if (deleteaddress.status === 200) {
          dispatch(success(deleteaddress.data.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(deleteaddress: any) {
    return { type: ACTION.placeOrder.DELETE_ADDRESS_REQUEST, deleteaddress };
  }
  function success(deleteaddress: any) {
    return { type: ACTION.placeOrder.DELETE_ADDRESS_SUCCESS, deleteaddress };
  }
  function failure(error: any) {
    return { type: ACTION.placeOrder.DELETE_ADDRESS_FAILURE, error };
  }
}
