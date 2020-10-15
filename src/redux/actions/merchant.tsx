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
          // const msg = merchantdata.message;
          // showSuccess(msg);
          dispatch(success(merchantdata.resultObject.data));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(merchantdata: any) {
    return { type: ACTION.category.GET_CATEGORY_REQUEST, merchantdata };
  }
  function success(merchantdata: any) {
    return { type: ACTION.category.GET_CATEGORY_SUCCESS, merchantdata };
  }
  function failure(error: any) {
    return { type: ACTION.category.GET_CATEGORY_FAILURE, error };
  }
}
