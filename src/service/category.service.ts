import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';
import { getCategoryListRequest } from '../modelController';

export default {
    /**
     * 
     * @param data : get category data
     */
    getCategoryData: async function (data:getCategoryListRequest) {
        return WebReqUrl.post(Constant.apiUrlAdmin + apiUrl.categoryController.category,data,true);
    }
}