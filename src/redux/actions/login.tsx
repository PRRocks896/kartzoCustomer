import * as ACTION from "../constant/constant";
import {UserAPI} from "../../service/index";

export const loginService = {
  login,
  verifyOtp,
  getAdminToken
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
      .then((userdata) => {
        // console.log("user", userdata);
        if (userdata.status === 200) {
          // const msg = userdata.message;
          // showSuccess(msg);
          dispatch(success(userdata));
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
      .then((otpdata:any) => {
        // console.log("otpdata", otpdata);
        if (otpdata.status === 200) {
          localStorage.setItem('user',JSON.stringify(otpdata.data.resultObject));
          localStorage.setItem('token',otpdata.data.resultObject.token);
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(otpdata));
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
      .then((token:any) => {
        // console.log("token", token);
        if (token.status === 200) {
          localStorage.setItem('adminToken',token.data.token);
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(token));
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