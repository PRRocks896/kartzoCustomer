import * as ACTION from "../constant/constant";

const initialState = {
  category: ""
};

const category = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.category.GET_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case ACTION.category.GET_CATEGORY_SUCCESS:
      // Auth.setAuth(action.response.data);
      return {
        ...state,
        category: action.categorydata,
      };
    case ACTION.category.GET_CATEGORY_FAILURE:
      // Auth.removeAuth();
      // Auth.removeAuthenticateUser();
      return {
        ...state,
        category: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default category;