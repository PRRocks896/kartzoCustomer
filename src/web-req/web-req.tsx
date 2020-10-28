import axios from 'axios';
// import Constant from '../constant/constant';
import { getAdminDetail, getHeaderDetail } from '../pages/utils/index';

const WebReqUrl = {
    /**
     * 
     * @param url : URL
     * @param isAdmin : Admin token falg
     */
    get: async function (url: string,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.get(url,{headers: getAdminDetail()})
            } else {
                response = await axios.get(url,{headers: getHeaderDetail()})
            }
           
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    },

    /**
     * 
     * @param url : URL
     * @param isAdmin : Admin token falg
     */
    delete: async function (url: string,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.delete(url, {headers: getAdminDetail()})
            } else {
                response = await axios.delete(url, {headers: getHeaderDetail()})
            }
           
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    },

   /**
    * 
    * @param url : URL
    * @param body : Body data pass in api
    * @param isAdmin : Admin token flag
    */
    put: async function (url: string, body: any,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.put(url, body, {headers: getAdminDetail()})
            } else {
                response = await axios.put(url, body, {headers: getHeaderDetail()})
            }
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    },

    /**
    * 
    * @param url : URL
    * @param body : Body data pass in api
    * @param isAdmin : Admin token flag
    */
    post: async function (url: string, body: any,isAdmin:boolean) {
        try {
            let response;
            if(isAdmin === true){
                response = await axios.post(url, body, {headers: getAdminDetail()})
            } else {
                response = await axios.post(url, body, {headers: getHeaderDetail()})
            }
            // console.log("response",response);
            if(response) {
                try {
                    if (response.status === 200) {
                        // console.log(response);
                        return response?.data;
                    } else {
                        // console.log(response);
                        return [];
                    }
                } catch (err) {
                    console.error(err);
                }
            } else {
                // console.log("err");
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export default WebReqUrl;