import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

export default {
    getMerchantData: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrlMerchant + apiUrl.findStoreController.getStore,data,true);
    }
}