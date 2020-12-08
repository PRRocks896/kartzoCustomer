import * as ACTION from "../index";
import {UserAPI} from "../../service/index";

/** Login service */
export const loginService = {
  login,
  verifyOtp,
  getAdminToken,
  getAppLink,
  updateProfileData,
  getProfile,
  getCommonToken
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
          // localStorage.setItem('adminToken',token.data.token);
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

/**
 * 
 * @param data : update profile
 */
function updateProfileData(data:any) {
  return (dispatch: any) => {
    dispatch(request({data}));

    UserAPI
      .updateprofile(data)
      .then(async (getprofiledata:any) => {
        console.log("getprofiledata", getprofiledata);
        if (getprofiledata.status === 200) {
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(await getprofiledata.data.resultObject));
        } else {
          dispatch(failure(getprofiledata));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getprofiledata: any) {
    return { type: ACTION.login.UPDATE_PROFILE_REQUEST, getprofiledata };
  }
  function success(getprofiledata: any) {
    return { type: ACTION.login.UPDATE_PROFILE_SUCCESS, getprofiledata };
  }
  function failure(error: any) {
    return { type: ACTION.login.UPDATE_PROFILE_FAILURE, error };
  }
}


/**
 * 
 * @param data : update profile
 */
function getProfile(data:any) {
  return (dispatch: any) => {
    dispatch(request({data}));

    UserAPI
      .getprofile(data)
      .then(async (getprofiledata:any) => {
        console.log("getprofiledata", getprofiledata);
        if (getprofiledata.status === 200) {
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(await getprofiledata.resultObject));
        } else {
          dispatch(failure(getprofiledata));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getprofiledata: any) {
    return { type: ACTION.login.GET_PROFILE_REQUEST, getprofiledata };
  }
  function success(getprofiledata: any) {
    return { type: ACTION.login.GET_PROFILE_SUCCESS, getprofiledata };
  }
  function failure(error: any) {
    return { type: ACTION.login.GET_PROFILE_FAILURE, error };
  }
}

/**
 * 
 * @param data : update profile
 */
function getCommonToken(data:any) {
  return (dispatch: any) => {
    dispatch(request({data}));

    UserAPI
      .getCommonTokenData(data)
      .then(async (getcommontoken:any) => {
        console.log("getcommontoken", getcommontoken);
        if (getcommontoken.status === 200) {
          // const msg = otpdata.message;
          // showSuccess(msg);
          dispatch(success(await getcommontoken.resultObject));
        } else {
          dispatch(failure(getcommontoken));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(getcommontoken: any) {
    return { type: ACTION.login.GET_COMMON_TOKEN_REQUEST, getcommontoken };
  }
  function success(getcommontoken: any) {
    return { type: ACTION.login.GET_COMMON_TOKEN_SUCESS, getcommontoken };
  }
  function failure(error: any) {
    return { type: ACTION.login.GET_COMMON_TOKEN_SUCESS, error };
  }
}






