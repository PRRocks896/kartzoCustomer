export default {
    imagearray:[
        {src:'../assets/images/Groceries-Essentials.png',alt:"Groceries",name:"Groceries & Essentials"},
        {src:'../assets/images/Fruits-Vegetables.png',alt:"Fruits",name:"Fruits & Vegetables"},
        {src:'../assets/images/Meat-Fish.png',alt:"Meat",name:"Meat & Fish"},
        {src:'../assets/images/Food-Delivery.png',alt:"Food",name:"Food Delivery"},
        {src:'../assets/images/Medicines.png',alt:"Medicines",name:"Medicines"},
        {src:'../assets/images/Pet-Supplies.png',alt:"PetSupplies",name:"Pet Supplies"},
        {src:'../assets/images/Flowers-Gifts.png',alt:"Flowers",name:"Flowers & Gifts"}
    ],
    categoryColor: [
        {clr: '#E28424', bclr: '#E28424'},
        {clr: '#91C8E0', bclr: '#91C8E0'},
        {clr: '#606669', bclr: '#606669'},
        {clr: '#CC5144', bclr: '#CC5144'},
        {clr: '#CC5144', bclr: '#CC5144'},
        {clr: '#7ACAA6', bclr: '#7ACAA6'},
        {clr: '#412816', bclr: '#412816'},
        {clr: '#FF5463', bclr: '#FF5463'}
    ],

    apiUrl:"http://api-customer.kartzoapp.com/v1/api/",
    filepath: "http://api.kartzoapp.com/",
    apiUrlAdmin:"http://api.kartzoapp.com/v1/api/",
    apiUrlMerchant:"http://api-merchant.kartzoapp.com/v1/api/",
    home:'Get free online delivery for food,medicines,groceries and more | ...',
    about:'About',
    contact:'Contact-Us',
    findstore:'Groceries & Essentials',
    store:"Store",
    profile:"Profile",
    cart:"Cart",
    job:"Carrers",
    placeorder:"Place Order",
    searchcity:'Search City',
    trackorder:'Track Order',
    business:"Business",
    partners:"Partners",

    loginpage:{
        title:{
            login:'Signin'
        },
        state:{
            mobile:'',
            mobileerror:'',
            otp:'',
            otperror:'',
            isDisplay:false,
            disabled:false,
            isButton:false,
            disabled1:false,
            isButtonVerify:false,
            disabledInput:false
        }
    },
    findStorePage:{
        title:{
            
        },
        state:{
            count: "10",
            currentPage: "1",
            items_per_page: "10",
            upperPageBound: 6,
            lowerPageBound: 0,
            pageBound: 3,
            onItemSelect: "",
            switchSort: false,
            isStatus: false,
            slugname:''
        }
    }

}