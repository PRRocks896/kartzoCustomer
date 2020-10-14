import { CALL_API } from "../middleware/api";
import * as ACTION from "../constant/constant";
import userService from "../../service/user.service";
import { showSuccess, showError } from "../../pages/utils/index";

export const loginService = {
  login,
  verifyOtp
};
function login(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    userService
      .loginUser(data)
      .then((userdata) => {
        console.log("user", userdata);
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

function verifyOtp(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    userService
      .verifyotp(data)
      .then((otpdata) => {
        console.log("otpdata", otpdata);
        if (otpdata.status === 200) {
          localStorage.setItem('mobile',otpdata.resultObject)
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
