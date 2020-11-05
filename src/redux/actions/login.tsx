import * as ACTION from "../index";
import {UserAPI} from "../../service/index";

export const loginService = {
  login,
  verifyOtp,
  getAdminToken,
  getAppLink
};

/**
 * 
 * @param data : get otp request
 */
function login(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    UserAPI
      .loginUser(data)
      .then(async (userdata) => {
        // console.log("user", userdata);
        if (userdata.status === 200) {
          // const msg = userdata.message;
          // showSuccess(msg);
          dispatch(success(await userdata));
        }
      })
      .catch((err) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(userdata: any) {
    return { type: ACTION.login.LOGIN_REQUEST, userdata };
  }
  function success(userdata: any) {
    return { type: ACTION.login.LOGIN_SUCCESS, userdata };
  }
  function failure(error: any) {
    return { type: ACTION.login.LOGIN_FAILURE, error };
  }
}

/**
 * 
 * @param data : otp verification request
 */
function verifyOtp(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    UserAPI
      .verifyotp(data)
      .then(async (otpdata:any) => {
        // console.log("otpdata", otpdata);
        if (otpdata.status === 200) {
          localStorage.setItem('user',JSON.stringify(otpdata.data.resultObject));
          localStorage.setItem('token',otpdata.data.resultObject.token);
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(await otpdata));
        } else {
          dispatch(failure(otpdata));
        }
      })
      .catch((err) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(otpdata: any) {
    return { type: ACTION.login.VERIFY_REQUEST, otpdata };
  }
  function success(otpdata: any) {
    return { type: ACTION.login.VERIFY_SUCCESS, otpdata };
  }
  function failure(error: any) {
    return { type: ACTION.login.VERIFY_FAILURE, error };
  }
}

/**
 * 
 * @param data : get admin token
 */
function getAdminToken(data:any) {
  return (dispatch: any) => {
    dispatch(request({data}));

    UserAPI
      .getAdminToken(data)
      .then(async (token:any) => {
        // console.log("token", token);
        if (token.status === 200) {
          localStorage.setItem('adminToken',token.data.token);
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(await token));
        } else {
          dispatch(failure(token));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(token: any) {
    return { type: ACTION.login.ADMIN_TOKEN_REQUEST, token };
  }
  function success(token: any) {
    return { type: ACTION.login.ADMIN_TOKEN_SUCCESS, token };
  }
  function failure(error: any) {
    return { type: ACTION.login.ADMIN_TOKEN_FAILURE, error };
  }
}

/**
 * 
 * @param data : get AppLink
 */
function getAppLink(data:any) {
  return (dispatch: any) => {
    dispatch(request({data}));

    UserAPI
      .getAppLinkData(data)
      .then(async (getappdata:any) => {
        // console.log("getappdata", getappdata);
        if (getappdata.status === 200) {
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(await getappdata));
        } else {
          dispatch(failure(getappdata));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getappdata: any) {
    return { type: ACTION.login.GET_APPLINK_REQUEST, getappdata };
  }
  function success(getappdata: any) {
    return { type: ACTION.login.GET_APPLINK_SUCCESS, getappdata };
  }
  function failure(error: any) {
    return { type: ACTION.login.GET_APPLINK_FAILURE, error };
  }
}

