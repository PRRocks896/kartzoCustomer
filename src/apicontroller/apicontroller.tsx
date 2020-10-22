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
        getStore:'user/get-merchant-list',
        getLocation:'address/get-city-list'
    },
    storeProductController: {
        getProduct:'user/get-product-list',
        addtocart:'ordercart',
        getcartdata:'ordercart/get-card-list',
        updatecart:'ordercart/',
        deleteData:'delete',
        getsearchproduct:'address/get-product-list'
    }
}

export default apiUrl;