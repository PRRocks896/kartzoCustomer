import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

export default {
    getCategoryData: async function (data:any) {
        return axios.post(Constant.apiUrlAdmin + apiUrl.categoryController.category,data);
    }
}