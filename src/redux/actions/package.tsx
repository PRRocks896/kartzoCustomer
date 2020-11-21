import * as ACTION from "../index";
import { PackageAPI } from "../../service/index";

/** Package service */
export const packageService = {
    searchAddressData
};

/**
 * 
 * @param data : get search location
 */
function searchAddressData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    PackageAPI.searchAddressData(data)
      .then(async (searchdata: any) => {
        console.log("searchdata", searchdata);
        if (searchdata.status === 200) {
          dispatch(success(await searchdata.resultObject));
        }
      })
      .catch((err: any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(searchdata: any) {
    return { type: ACTION.sendpackage.GET_SEARCH_ADDRESS_REQUEST, searchdata };
  }
  function success(searchdata: any) {
    return { type: ACTION.sendpackage.GET_SEARCH_ADDRESS_SUCCESS, searchdata };
  }
  function failure(error: any) {
    return { type: ACTION.sendpackage.GET_SEARCH_ADDRESS_FAILURE, error };
  }
}
