import * as ACTION from "../constant/constant";
import {FindStoreAPI} from "../../service/index";
// import { showSuccess, showError } from "../../pages/utils/index";

export const merchantService = {
    getMerchantData
};

/** Get Category Request */
function getMerchantData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    FindStoreAPI
      .getMerchantData(data)
      .then((merchantdata:any) => {
        // console.log("merchantdata", merchantdata);
        if (merchantdata.status === 200) {
          dispatch(success(merchantdata.data.resultObject));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(merchantdata: any) {
    return { type: ACTION.merchant.GET_MERCHANT_REQUEST, merchantdata };
  }
  function success(merchantdata: any) {
    return { type: ACTION.merchant.GET_MERCHANT_SUCCESS, merchantdata };
  }
  function failure(error: any) {
    return { type: ACTION.merchant.GET_MERCHANT_FAILURE, error };
  }
}
