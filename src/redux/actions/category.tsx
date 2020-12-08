import * as ACTION from "../index";
import {CategoryAPI} from "../../service/index";

/** Category service */
export const categoryService = {
    getCategoryData
};

/**
 * 
 * @param data : get category data
 */
function getCategoryData(data: any) {
  return (dispatch: any) => {
    dispatch(request({ data }));

    CategoryAPI
      .getCategoryData(data)
      .then(async (categorydata:any) => {
        // console.log("categorydata", categorydata);
        if (categorydata.status === 200) {
          // const msg = categorydata.message;
          // showSuccess(msg);
          const res = await categorydata.resultObject.data;
          dispatch(success(res));
        }
      })
      .catch((err:any) => {
        dispatch(failure(err.toString()));
      });
  };

  function request(categorydata: any) {
    return { type: ACTION.category.GET_CATEGORY_REQUEST, categorydata };
  }
  function success(categorydata: any) {
    return { type: ACTION.category.GET_CATEGORY_SUCCESS, categorydata };
  }
  function failure(error: any) {
    return { type: ACTION.category.GET_CATEGORY_FAILURE, error };
  }
}
