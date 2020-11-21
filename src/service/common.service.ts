import Constant from '../pages/constant/constant';
// import WebReqUrl from '../web-req/web-req';
import apiUrl from  '../apicontroller/apicontroller';
import axios from 'axios';
import WebReqUrl from '../web-req/web-req';

export default {
    /**
     * 
     * @param data : get category data
     */
    getfooterdata: async function () {
        return axios.get(Constant.apiUrlAdmin + apiUrl.commonController.getfooterdata);
    }
}