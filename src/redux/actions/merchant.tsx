import * as ACTION from "../index";
import { FindStoreAPI } from "../../service/index";

/** Merchant service */
export const merchantService = {
  getMerchantData,
  searchLocationResponse,
};

/**
 * 
 * @param data : get merchant data
 */
function getMerchantData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    FindStoreAPI.getMerchantData(data)
      .then(async (merchantdata: any) => {
        console.log("merchantdata", merchantdata);
        if (merchantdata.status === 200) {
          dispatch(success(await merchantdata.resultObject));
        }
      })
      .catch((err: any) => {
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

/**
 * 
 * @param data : get search location
 */
function searchLocationResponse(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    FindStoreAPI.getlocationData(data)
      .then(async (locationdata: any) => {
        console.log("locationdata", locationdata);
        if (locationdata.status === 200) {
          dispatch(success(await locationdata.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(locationdata: any) {
    return { type: ACTION.location.GET_LOCATION_REQUEST, locationdata };
  }
  function success(locationdata: any) {
    return { type: ACTION.location.GET_LOCATION_SUCCESS, locationdata };
  }
  function failure(error: any) {
    return { type: ACTION.location.GET_LOCATION_FAILURE, error };
  }
}
