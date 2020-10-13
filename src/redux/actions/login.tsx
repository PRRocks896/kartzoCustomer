import { CALL_API } from '../middleware/api';
import * as ACTION from '../constant/constant';
import userService from '../../service/user.service';
import {showSuccess,showError} from '../../pages/utils/index';

// export const login = (data:any) => {
//   // return {
//   //   [CALL_API]: {
//   //     endpoint: 'User/getAuthTokens',
//   //     init: {
//   //       method: 'POST',
//   //       body: JSON.stringify(data),
//   //     },
//   //     types: [
//   //       ACTION.LOGIN_REQUEST,
//   //       ACTION.LOGIN_SUCCESS,
//   //       ACTION.LOGIN_FAILURE,
//   //     ],
//   //   }
//   // };
// };

export const loginService = {
  login
};
  function login(data:any) {
    return (dispatch:any) => {
        dispatch(request({ data }));

        userService.loginUser(data)
            .then(
                userdata => { 
                  console.log("user",userdata)
                    if(userdata.status === 200) {
                      const msg = userdata.data.message
                      showSuccess(msg);
                      dispatch(success(userdata));
                    }
                }
            ).catch(err => {
                dispatch(failure(err.toString()));
            });
    };

    function request(userdata:any) { return { type: ACTION.login.LOGIN_REQUEST, userdata } }
    function success(userdata:any) { return { type: ACTION.login.LOGIN_SUCCESS, userdata } }
    function failure(error:any) { return { type: ACTION.login.LOGIN_FAILURE, error } }
  }



// export const ForgotPassword = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'User/forgotPassword',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["FORGOTPASSWORD_REQUEST", "FORGOTPASSWORD_SUCCESS", "FORGOTPASSWORD_FAILURE"],
//     }
//   };
// };


// export const changepassword = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'User/changePassword',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["CHANGEPASSWORD_REQUEST", "CHANGEPASSWORD_SUCCESS", "CHANGEPASSWORD_FAILURE"],
//     }
//   };
// };


// export const getUser = (id) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'User/currentUser',
//       init: {
//         method: 'POST',
//         body: JSON.stringify({id: id}),
//       },
//       types: ["PROFILE_REQUEST", "PROFILE_SUCCESS", "PROFILE_FAILURE"],
//     }
//   };
// };

// export const avatarUpload = (data) => {

//   return {
//     [CALL_API]: {
//       endpoint: 'User/uploadUserImage',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["AVATAR_REQUEST", "AVATAR_SUCCESS", "AVATAR_FAILURE"],
//     }
//   };
// };

// export const updateprofile = (data) => {

//   return {
//     [CALL_API]: {
//       endpoint: 'User/updateUserDetailsById',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["UPDATE_PROFILE_REQUEST", "UPDATE_PROFILE_SUCCESS", "UPDATE_PROFILE_FAILURE"],
//     }
//   };
// };

// export const getUserRoleId = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'UserRole/searchUserRole',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["SEARCHUSERROLEID_REQUEST", "SEARCHUSERROLEID_SUCCESS", "SEARCHUSERROLEID_FAILURE"],
//     }
//   };
// };


// export const removeImage = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'User/removeUserImage',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["REMOVEUSERIMAGE_REQUEST", "REMOVEUSERIMAGE_SUCCESS", "REMOVEUSERIMAGE_FAILURE"],
//     }
//   };
// };

// export const updateProfileData = () => {
//   return {
//     types: ["UPDATEPROFILE"]
//   };
// };

// export const countuser = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'AP/countUsers',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["GETUSERSCOUNTS_REQUEST", "GETUSERSCOUNTS_SUCCESS", "GETUSERSCOUNTS_FAILURE"],
//     }
//   };
// };

// export const usersPGData = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'AP/usersByPg',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["GETUSERSPG_REQUEST", "GETUSERSPG_SUCCESS", "GETUSERSPG_FAILURE"],
//     }
//   };
// };

// export const searchUsersData = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'AP/usersBySearch',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["SEARCHUSERS_REQUEST", "SEARCHUSERS_SUCCESS", "SEARCHUSERS_FAILURE"],
//     }
//   };
// };

// export const blockUser = (data) => {
//   return {
//     [CALL_API]: {
//       endpoint: 'AP/inactiveUser',
//       init: {
//         method: 'POST',
//         body: JSON.stringify(data),
//       },
//       types: ["INACTIVEUSER_REQUEST", "INACTIVEUSER_SUCCESS", "INACTIVEUSER_FAILURE"],
//     }
//   };
// };





// export const logout = () => {
//   return {
//     [CALL_API]: {
//       endpoint: '/auth/logout',
//       init: {
//         method: 'GET',
//       },
//       types: [
//         ACTION.LOGOUT_REQUEST,
//         ACTION.LOGOUT_SUCCESS,
//         ACTION.LOGOUT_FAILURE,
//       ],
//     }
//   };
// };