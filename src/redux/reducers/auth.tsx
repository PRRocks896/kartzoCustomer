import * as ACTION from "../constant/constant";

const initialState = {
  user: "",
  // user: {},
  // avatar: {},
  // auth_data: {},
  // user_data: {},
  // count: {},
  // userrole: {},
  // userroledata: {},
  // userrightdata: {},
  // userroletoright: {},
  // error: null,
  // userright: {},
  // searchdata: {},
  // appCount: {},
  // appData: {},
  // userdata: {}
};

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
        // user: action.userdata.data,
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
