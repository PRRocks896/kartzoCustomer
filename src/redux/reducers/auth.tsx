import * as ACTION from "../constant/constant";

const initialState = {
  user: "",
  otpdetail:""
};

/**
 * 
 * @param state : intial state
 * @param action : action response
 */
const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.login.LOGIN_REQUEST:
      return {
        ...state,
      };
    case ACTION.login.LOGIN_SUCCESS:
      // Auth.setAuth(action.response.data);
      return {
        ...state,
        user: action.userdata,
      };
    case ACTION.login.LOGIN_FAILURE:
      // Auth.removeAuth();
      // Auth.removeAuthenticateUser();
      return {
        ...state,
        user: {},
        error: action.error,
      };

      case ACTION.login.VERIFY_REQUEST:
      return {
        ...state,
      };
    case ACTION.login.VERIFY_SUCCESS:
      // Auth.setAuth(action.response.data);
      return {
        ...state,
        otpdetail: action.otpdata,
      };
    case ACTION.login.VERIFY_FAILURE:
      // Auth.removeAuth();
      // Auth.removeAuthenticateUser();
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default auth;
