import * as ACTION from "../index";
import {CommonAPI} from "../../service/index";

/** Common service */
export const commonService = {
getFooterData
};

/**
 * 
 * @param data : get footer data request
 */
function getFooterData() {
  return (dispatch: any) => {
    // dispatch(request({ data }));

    CommonAPI
      .getfooterdata()
      .then(async (footerdata) => {
        console.log("footerdata", footerdata);
        if (footerdata.status === 200) {
          // const msg = footerdata.message;
          // showSuccess(msg);
          dispatch(success(await footerdata.data.resultObject));
        }
      })
      .catch((err) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(footerdata: any) {
    return { type: ACTION.common.GET_FOOTER_REQUEST, footerdata };
  }
  function success(footerdata: any) {
    return { type: ACTION.common.GET_FOOTER_SUCCESS, footerdata };
  }
  function failure(error: any) {
    return { type: ACTION.common.GET_FOOTER_FAILURE, error };
  }
}






