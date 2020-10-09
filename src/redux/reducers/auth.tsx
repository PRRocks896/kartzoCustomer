import * as ACTION from '../constant/constant';
import Swal from 'sweetalert2';

const initialState = {
   user : []
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


const auth = (state = initialState, action:any) => {
    switch (action.type) {

        // REGISTER USER
        case ACTION.REGISTER_REQUEST:
            return {
            user:null
              
                // fetching: true,
            };
        case ACTION.REGISTER_SUCCESS:
            return {
                user:null
                // fetching: false,
                // user: action.response.data,
            };
        case ACTION.REGISTER_FAILURE:
            return {
                user:null,
                // fetching: false,
                // userdata: {},
                error: action.error
            };

            default:
                return state;
        }
}

export default auth;

