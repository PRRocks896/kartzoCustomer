import * as ACTION from "../index";
import {CommonAPI} from "../../service/index";

/** Common service */
export const commonService = {
getFooterData,
getFooterLinkData
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
        // console.log("footerdata", footerdata);
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

/**
 * 
 * @param data : get footer link data request
 */
function getFooterLinkData() {
  return (dispatch: any) => {
    // dispatch(request({ data }));

    CommonAPI
      .getfooterlinkdata()
      .then(async (footerlinkdata:any) => {
        console.log("footerdata", footerlinkdata);
        if (footerlinkdata.status === 200) {
          // const msg = footerlinkdata.message;
          // showSuccess(msg);
          dispatch(success(await footerlinkdata.data.resultObject));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(footerlinkdata: any) {
    return { type: ACTION.common.GET_FOOTER_LINK_REQUEST, footerlinkdata };
  }
  function success(footerlinkdata: any) {
    return { type: ACTION.common.GET_FOOTER_LINK_SUCCESS, footerlinkdata };
  }
  function failure(error: any) {
    return { type: ACTION.common.GET_FOOTER_LINK_FAILURE, error };
  }
}






