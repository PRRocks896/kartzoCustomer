const apiUrl = {
    userController: {
        createData:'user/otp-send',
        verifyotp:'user/otp-verified',
        adminToken:'token/get-admin-token',
        getapplink:'user/get-app-link',
        updateprofile:'user/update-profile',
        getprofile:'user/'
    },
    categoryController: {
        category:'category/get-category-list'
    },
    commonController: {
        getfooterdata:'users/get-footer-city-detail',
        getfooterlinkdata:'users/get-footer-link-detail'
    },
    findStoreController: {
        getStore:'user/get-merchant-list',
        getLocation:'address/get-city-list'
    },
    addressController: {
        getaddress:'address/get-address-list',
        addaddress:'address',
        getaddressbyid:'address/',
        updateAddress:'address/',
        deleteData:'delete'
    },
    storeProductController: {
        getProduct:'user/get-product-list',
        addtocart:'ordercart',
        getcartdata:'ordercart/get-card-list',
        updatecart:'ordercart/',
        deleteData:'delete',
        getsearchproduct:'address/get-product-list'
    },
    cardController: {
        getcard:'card/get-card-list',
        addcard:'card',
        getaddressbyid:'address/',
        updatecard:'card/',
        deleteData:'delete'
    },
    orderController: {
        getorder:'order/get-Order-list',
        addcard:'card',
        getaddressbyid:'address/',
        updatecard:'card/',
        deleteData:'delete',
        createorder:'order'
    },
    packageController: {
        getaddress:'address/get-address'
    },
    
}

export default apiUrl;