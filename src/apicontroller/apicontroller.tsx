const apiUrl = {
    userController: {
        createData:'user/otp-send',
        verifyotp:'user/otp-verified',
        adminToken:'token/get-admin-token'
    },
    categoryController: {
        category:'category/get-category-list'
    },
    findStoreController: {
        getStore:'merchant/get-merchant-list'
    }
}

export default apiUrl;