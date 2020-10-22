import Constant from '../pages/constant/constant';
import apiUrl from  '../apicontroller/apicontroller';
import WebReqUrl from '../web-req/web-req';
import axios from 'axios';
// import { loginCreateRequest, forgotPasswordRequest, profileGetRequest, resetPasswordRequest, changePasswordRequest, getAllTableDataListRequest, getDataByIdRequest, deleteByIdRequest } from "../modelController";

export default {
    getProductData: async function (data:any) {
        return axios.post(Constant.apiUrl + apiUrl.storeProductController.getProduct,data);
    },
    addtocart: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.storeProductController.addtocart,data,false);
    },
    getCartAllData: async function (data:any) {
        return WebReqUrl.post(Constant.apiUrl + apiUrl.storeProductController.getcartdata,data,false);
    },
    updatecart: async function (data:any,id:any) {
        return WebReqUrl.put(Constant.apiUrl + apiUrl.storeProductController.updatecart + id,data,false);
    }
}