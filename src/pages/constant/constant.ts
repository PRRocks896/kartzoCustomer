export default {
  imagearray: [
    {
      src: "../assets/images/Groceries-Essentials.png",
      alt: "Groceries",
      name: "Groceries & Essentials",
    },
    {
      src: "../assets/images/Fruits-Vegetables.png",
      alt: "Fruits",
      name: "Fruits & Vegetables",
    },
    { src: "../assets/images/Meat-Fish.png", alt: "Meat", name: "Meat & Fish" },
    {
      src: "../assets/images/Food-Delivery.png",
      alt: "Food",
      name: "Food Delivery",
    },
    {
      src: "../assets/images/Medicines.png",
      alt: "Medicines",
      name: "Medicines",
    },
    {
      src: "../assets/images/Pet-Supplies.png",
      alt: "PetSupplies",
      name: "Pet Supplies",
    },
    {
      src: "../assets/images/Flowers-Gifts.png",
      alt: "Flowers",
      name: "Flowers & Gifts",
    },
  ],
  categoryColor: [
    { clr: "#E28424", bclr: "#E28424" },
    { clr: "#91C8E0", bclr: "#91C8E0" },
    { clr: "#606669", bclr: "#606669" },
    { clr: "#CC5144", bclr: "#CC5144" },
    { clr: "#CC5144", bclr: "#CC5144" },
    { clr: "#7ACAA6", bclr: "#7ACAA6" },
    { clr: "#412816", bclr: "#412816" },
    { clr: "#FF5463", bclr: "#FF5463" },
  ],

  apiUrl: "http://api-customer.kartzoapp.com/v1/api/",
  filepath: "http://api.kartzoapp.com/",
  filemerchantpath: "http://api-merchant.kartzoapp.com/",
  apiUrlAdmin: "http://api.kartzoapp.com/v1/api/",
  apiUrlMerchant: "http://api-merchant.kartzoapp.com/v1/api/",
  home: "Get free online delivery for food,medicines,groceries and more | ...",
  about: "About",
  contact: "Contact-Us",
  findstore: "Groceries & Essentials",
  store: "Store",
  profile: "Profile",
  cart: "Cart",
  job: "Carrers",
  placeorder: "Place Order",
  searchcity: "Search City",
  trackorder: "Track Order",
  business: "Business",
  partners: "Partners",

  loginpage: {
    title: {
      login: "Signin",
    },
    state: {
      mobile: "",
      mobileerror: "",
      otp: "",
      otperror: "",
      isDisplay: false,
      disabled: false,
      isButton: false,
      disabled1: false,
      isButtonVerify: false,
      disabledInput: false,
    },
  },
  headerPage: {
    title: {},
    state: {
      isShow: false,
      count:0
    },
  },
  footerPage: {
    title: {},
    state: {
      isShow: false,
    },
  },
  profilePage: {
    title: {},
    state: {
      mobile: "",
    },
  },
  categoryPage: {
    title: {},
    state: {
      categorydata: [],
      isLoading: true,
    },
  },
  searchCityPage: {
    title: {},
    state: {
      slugname: "",
    },
  },
  findStorePage: {
    title: {},
    state: {
      count: "0",
      currentPage: "1",
      items_per_page: "4",
      upperPageBound: 6,
      lowerPageBound: 0,
      pageBound: 3,
      onItemSelect: "",
      switchSort: false,
      isStatus: false,
      slugname: "",
      location: "rajkot",
      merchantdata: [],
      locationData: [],
      isLoading: true,
      cityid:''
    },
  },
  bannerPage: {
    title: {},
    state: {
      lat: "",
      long: "",
      city: "",
      area: "",
      isSearch: false,
      location: "rajkot",
    },
  },
  storeItemPage: {
    title: {},
    state: {
      activeLink: 1,
      isShowCard: false,
      location: "rajkot",
      slugname: "",
      categorydata: [],
      productdata: [],
      cartarray: [],
      maindata: "",
      qty: 1,
      searchproductdata: [],
      searchproductdatadetails: [],
      isButton: false,
      loadingid: "",
    },
  },
  cartPage: {
    title: {},
    state: {
      activeLink: "1",
      isShowCard: false,
      cartarray: [],
      isOpen: false,
    },
  },
  placeorderPage: {
    title: {},
    state: {
      checkedvalue: false,
      showSection: false,
      checkedpaymentvalue: false,
      checkedpaymentvaluewallets: false,
      checkedpaymentvaluecard: false,
      checkedpaymentvaluenetbanking: false,
      usermobile: "",
      addresstype: 1,
      paymenttype: 0,
      paytype: 0,
      banktype: 0,
      firstName:'',
      lastname:'',
      lat:'',
      long:'',
      city:'',
      cityerror:'',
      area:'',
      country:'',
      countryerror:'',
      state:'',
      stateerror:'',
      pincode:'',
      pincodeerror:'',
      addresserror:'',
      address:'',
      name:'',
      nameerror:'',
      addresstypeerror:'',
      mobileerror:'',
      mobile:'',
      landmark:'',
      landmarkerror:'',
      cartarray:[],
      addressarray:[]

    },
    bankarray: [
      { title: "Airtel Payments Bank", value: "6" },
      { title: "Allahabad Bank", value: "7" },
      { title: "Andhra Bank", value: "8" },
      { title: "AU Small Finance Bank", value: "9" },
      { title: "Bandhan Bank", value: "10" },
      { title: "Bassien Catholic Co-Operative Bank", value: "11" },
      { title: "BNP Paribas", value: "12" },
      { title: "Bank of Bahrain and Kuwait", value: "13" },
      { title: "Bank of Baroda", value: "14" },
      { title: "Bank of Baroda Corporate", value: "15" },
      { title: "Bank of Baroda Retail", value: "16" },
      { title: "Bank of India", value: "17" },
      { title: "Bank of Maharashtra", value: "18" },
      { title: "Canara Bank", value: "19" },
      { title: "Catholic Syrian Bank", value: "20" },
      { title: "Central Bank", value: "21" },
      { title: "City Union Bank", value: "22" },
      { title: "Corporation Bank", value: "23" },
      { title: "Cosmos Co-op Bank", value: "24" },
      { title: "digibank by DBS", value: "25" },
      { title: "DCB BANK LTD", value: "26" },
      { title: "Dena Bank", value: "27" },
      { title: "Deutsche Bank", value: "28" },
      { title: "Dhanalakshmi Bank", value: "29" },
      { title: "Federal Bank", value: "30" },
      { title: "IDBI Bank", value: "31" },
      { title: "IDFC FIRST Bank", value: "32" },
      { title: "Indian Bank", value: "33" },
      { title: "IndusInd Bank", value: "34" },
      { title: "Indian Overseas Bank", value: "35" },
      { title: "JANATA SAHAKARI BANK LTD PUNE", value: "36" },
      { title: "J&amp;K Bank", value: "37" },
      { title: "Karnataka Bank", value: "38" },
      { title: "Karur Vysya Bank", value: "39" },
      { title: "Lakshmi Vilas Bank - Retail", value: "40" },
      { title: "Oriental Bank of Commerce", value: "41" },
      { title: "Punjab National Bank", value: "42" },
      { title: "Punjab National Bank Corporate", value: "43" },
      { title: "Punjab &amp; Sind Bank", value: "44" },
      { title: "Punjab &amp; Maharashtra Co-op Bank", value: "45" },
      { title: "RBL Bank – Net Banking", value: "46" },
      { title: "RBS", value: "47" },
      { title: "Saraswat Co-op Bank", value: "48" },
      { title: "Shamrao Vithal Co-op Bank", value: "49" },
      { title: "Shivalik Mercantile Co-op Bank", value: "50" },
      { title: "The South Indian Bank", value: "51" },
      { title: "Standard Chartered Bank", value: "52" },
      { title: "Syndicate Bank", value: "53" },
      { title: "Tamilnad Mercantile Bank Limited", value: "54" },
      { title: "Tamil Nadu Merchantile Bank", value: "55" },
      { title: "TNSC Bank", value: "56" },
      { title: "UCO Bank", value: "57" },
      { title: "Union Bank of India", value: "58" },
      { title: "United Bank of India", value: "59" },
      { title: "Vijaya Bank", value: "60" },
      { title: "Yes Bank", value: "61" },
      { title: "The Zoroastrian Co-Operative Bank", value: "62" },
    ],
  },
};
