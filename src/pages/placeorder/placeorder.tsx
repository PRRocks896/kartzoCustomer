import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  addAddressRequest,
  addCartRequest,
  getAddressListRequest,
  getCartListRequest,
  placeorderStateRequest,
  removeCartItemRequest,
} from "../../modelController";
import {
  header,
  trackorder,
  placeorder,
} from "../../pages/components/helper/images";
import constant from "../constant/constant";
import { getAppName, alertMessage, rendomGenerateOrderNumber } from "../utils";
import { connect } from "react-redux";
import "./placeorder.css";
import { Modal } from "react-bootstrap";
import {
  orderService,
  placeOrderService,
  productService,
} from "../../redux/index";
import { OrderAPI } from "../../service";
import creditCardType from "credit-card-type";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
declare var Razorpay: any;
var $ = require("jquery");

class PlaceOrder extends React.Component<{
  show: boolean;
  getAddressList: any;
  addAddress: any;
  getcartData: any;
  updateToCart: any;
  history: any;
  deleteAddress: any;
  updateAddress: any;
  addCard: any;
  getcard: any;
  updateCard: any;
  deleteCard: any;
  createOrder: any;
  getCouponData: any;
  applyCoupon: any;
  getApplyList: any;
  removeCoupon: any;
}> {
  /** place order state */
  placeOrderState: placeorderStateRequest = constant.placeorderPage.state;
  state = {
    checkedvalue: this.placeOrderState.checkedvalue,
    showSection: this.placeOrderState.showSection,
    checkedpaymentvalue: this.placeOrderState.checkedpaymentvalue,
    checkedpaymentvaluewallets: this.placeOrderState.checkedpaymentvaluewallets,
    checkedpaymentvaluecard: this.placeOrderState.checkedpaymentvaluecard,
    checkedpaymentvaluenetbanking: this.placeOrderState
      .checkedpaymentvaluenetbanking,
    usermobile: this.placeOrderState.usermobile,
    addresstype: this.placeOrderState.addresstype,
    paymenttype: this.placeOrderState.paymenttype,
    paytype: this.placeOrderState.paytype,
    banktype: this.placeOrderState.banktype,
    firstName: this.placeOrderState.firstName,
    lastname: this.placeOrderState.lastname,
    lat: this.placeOrderState.lat,
    long: this.placeOrderState.long,
    city: this.placeOrderState.city,
    cityerror: this.placeOrderState.cityerror,
    area: this.placeOrderState.area,
    country: this.placeOrderState.country,
    countryerror: this.placeOrderState.countryerror,
    state: this.placeOrderState.state,
    stateerror: this.placeOrderState.stateerror,
    pincode: this.placeOrderState.pincode,
    pincodeerror: this.placeOrderState.pincodeerror,
    address: this.placeOrderState.address,
    addresserror: this.placeOrderState.addresserror,
    name: this.placeOrderState.name,
    nameerror: this.placeOrderState.nameerror,
    addresstypeerror: this.placeOrderState.addresstypeerror,
    mobile: this.placeOrderState.mobile,
    mobileerror: this.placeOrderState.mobileerror,
    landmarkerror: this.placeOrderState.landmarkerror,
    landmark: this.placeOrderState.landmark,
    cartarray: this.placeOrderState.cartarray,
    addressarray: this.placeOrderState.addressarray,
    mainaddress: this.placeOrderState.mainaddress,
    addressid: this.placeOrderState.addressid,
    updateTrue: this.placeOrderState.updateTrue,
    month: this.placeOrderState.month,
    year: this.placeOrderState.year,
    cardnumber: this.placeOrderState.cardnumber,
    cardnumbererror: this.placeOrderState.cardnumbererror,
    cardholder: this.placeOrderState.cardholder,
    cardholdererror: this.placeOrderState.cardholdererror,
    cardtype: this.placeOrderState.cardtype,
    carddata: this.placeOrderState.carddata,
    isCard: this.placeOrderState.isCard,
    cvvid: this.placeOrderState.cvvid,
    cvv: this.placeOrderState.cvv,
    cvverror: this.placeOrderState.cvverror,
    cardid: this.placeOrderState.cardid,
    cardUpdateTrue: this.placeOrderState.cardUpdateTrue,
    cvvdesc: this.placeOrderState.cvvdesc,
    workdisabled: this.placeOrderState.workdisabled,
    otherdisabled: this.placeOrderState.otherdisabled,
    homedisabled: this.placeOrderState.homedisabled,
    montherror: this.placeOrderState.montherror,
    changewallet: this.placeOrderState.changewallet,
    amount: this.placeOrderState.amount,
    amounterror: this.placeOrderState.amounterror,
    codename: this.placeOrderState.codename,
    upiTrue: this.placeOrderState.upiTrue,
    cardTrue: this.placeOrderState.cardTrue,
    walletTrue: this.placeOrderState.walletTrue,
    netbankingTrue: this.placeOrderState.netbankingTrue,
    freecharge: this.placeOrderState.freecharge,
    olamoney: this.placeOrderState.olamoney,
    payzapp: this.placeOrderState.payzapp,
    AMEX: this.placeOrderState.AMEX,
    BAJAJ: this.placeOrderState.BAJAJ,
    DICL: this.placeOrderState.DICL,
    JCB: this.placeOrderState.JCB,
    MAES: this.placeOrderState.MAES,
    MC: this.placeOrderState.MC,
    RUPAY: this.placeOrderState.RUPAY,
    VISA: this.placeOrderState.VISA,
    bankarray: this.placeOrderState.bankarray,
    walletnumber: this.placeOrderState.walletnumber,
    walletnumbererror: this.placeOrderState.walletnumbererror,
    coupondetails: this.placeOrderState.coupondetails,
    openModel: this.placeOrderState.openModel,
    couponShow: this.placeOrderState.couponShow,
    couponid: this.placeOrderState.couponid,
    couponapplieddata: this.placeOrderState.couponapplieddata,
    discount: this.placeOrderState.discount,
    totalpay: this.placeOrderState.totalpay,
    couponerror: this.placeOrderState.couponerror,
    isShowApplied: this.placeOrderState.isShowApplied,
    upiid: "",
    upiiderror: "",
    qtydisable:false,
    banktypeerror:"",
    isLoading:true
  };

  /** Constructor call */
  constructor(props: any) {
    super(props);
    this.change = this.change.bind(this);
    this.showSection = this.showSection.bind(this);
    this.changePaymentUPI = this.changePaymentUPI.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changePhonePay = this.changePhonePay.bind(this);
    this.changeBankType = this.changeBankType.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.addAddress = this.addAddress.bind(this);
    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.getAddressData = this.getAddressData.bind(this);
    this.deleteAddressData = this.deleteAddressData.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.addCard = this.addCard.bind(this);
    this.onPaymentChange = this.onPaymentChange.bind(this);
    this.showCardSection = this.showCardSection.bind(this);
    this.changeCVV = this.changeCVV.bind(this);
    this.getCardData = this.getCardData.bind(this);
    this.editCard = this.editCard.bind(this);
    this.deleteCardData = this.deleteCardData.bind(this);
    this.paymentWithCard = this.paymentWithCard.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openCheckout = this.openCheckout.bind(this);
    this.changeWallet = this.changeWallet.bind(this);
    this.payWallet = this.payWallet.bind(this);
    this.openApplyModel = this.openApplyModel.bind(this);
    this.handleCloseModel = this.handleCloseModel.bind(this);
    this.couponApply = this.couponApply.bind(this);
    this.removeCoupon = this.removeCoupon.bind(this);
    this.applyCoupon = this.applyCoupon.bind(this);
    this.notapply = this.notapply.bind(this);
    this.payWithNetBanking = this.payWithNetBanking.bind(this);
    this.payWithUPI = this.payWithUPI.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/signin");
    } else {
      document.title = constant.placeorder + getAppName();
      EventEmitter.dispatch("isShow", true);
      EventEmitter.dispatch("isShowFooter", true);
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      this.setState({
        usermobile: user.phone,
        mobile: (this.state.mobile = user.phone),
        firstname: user.firstName,
        lastname: user.lastName,
      });
      this.getAddressDetails();
      if (localStorage.getItem("token")) {
        this.getCartData();
        this.getCard();
        this.openCheckout();
        this.getCouponList();
        // this.getCouponApply();
      }
    }
  }

  /**
   *
   * @param searchText : search value
   * @param page : page number
   * @param size : per page size value
   */
  getCartData(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getCartListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getcartData(obj);
  }

  /**
   *
   * @param searchText : search value
   * @param page : page number
   * @param size : per page display data
   */
  getCard(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getCartListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getcard(obj);
  }

  /**
   *
   * @param e : get address id
   */
  change(e: any) {
    this.setState({
      mainaddress: (this.state.mainaddress = parseInt(e.target.id)),
    });
  }

  /** Open address add section */
  showSection() {
    this.setState({
      nameerror: "",
      name: "",
      mobileerror: "",
      // mobile: "",
      addresserror: "",
      address: "",
      cityerror: "",
      city: "",
      stateerror: "",
      state: "",
      countryerror: "",
      country: "",
      pincodeerror: "",
      pincode: "",
      landmarkerror: "",
      landmark: "",
      addresstype: "1",
      updateTrue: false,
      showSection: true,
      homedisabled: false,
      workdisabled: false,
      otherdisabled: false,
    });
  }

  /**
   *
   * @param e : payment type
   */
  changePaymentUPI(e: any) {
    this.setState({
      paymenttype: (this.state.paymenttype = parseInt(e.target.id)),
    });
  }

  /**
   * @param searchText : search value
   * @param page : page number
   * @param size : per page display value
   */
  getAddressDetails(
    searchText: string = "",
    page: number = 1,
    size: number = 20
  ) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj: getAddressListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    if (user) {
      this.props.getAddressList(obj);
    }
  }

  /**
   *
   * @param e : address type select
   */
  changeAddress(e: any) {
    this.setState({
      addresstype: (this.state.addresstype = e.target.id),
    });
  }

  /**
   *
   * @param e : phonepay with payment
   */
  changePhonePay(e: any) {
    this.setState({
      paytype: (this.state.paytype = parseInt(e.target.id)),
    });
  }

  /**
   *
   * @param e : bank with payment
   */
  changeBankType(e: any) {
    this.setState({
      banktype: (this.state.banktype = e.target.id),
    });
    // console.log("banktype", this.state.banktype);
  }

  /**
   *
   * @param e : select bank for payment
   */
  selectBank(e: any) {
    this.setState({
      banktype: (this.state.banktype = e.target.value),
    });
    // console.log("banktype", this.state.banktype);
  }

  /**
   *
   * @param prevProps : get updated props value
   */

  componentDidUpdate(prevProps:any) {
    const placeorder:any = this.props;
    if (prevProps.getCartDetail !== placeorder.getCartDetail) {
      this.getCartAllProductData(placeorder.getCartDetail);
    }
    if (prevProps.addressDetails !== placeorder.addressDetails) {
      this.setState({
        showSection: (this.state.showSection = false),
      });
      this.getAddressDetailsData(placeorder.addressDetails);
    }
    if (prevProps.getCardDetail !== placeorder.getCardDetail) {
      this.setState({
        isCard: (this.state.isCard = false),
      });
      this.getCardDetails(placeorder.getCardDetail);
    }
    if (prevProps.getCouponDetail !== placeorder.getCouponDetail) {
      this.getCouponDetails(placeorder.getCouponDetail);
    }
    if (prevProps.applycoupon !== placeorder.applycoupon) {
      this.CouponappliedDetails(placeorder.applycoupon);
    }
    if (prevProps.getApplyCouponData !== placeorder.getApplyCouponData) {
      this.getApplyCouponDetails(placeorder.getApplyCouponData);
    }
    if (prevProps.removeCouponData !== placeorder.removeCouponData) {
      this.removeCouponApplied(placeorder.removeCouponData);
    }
    if (prevProps.orderDetail !== placeorder.orderDetail) {
      this.orderSuccess(placeorder.orderDetail);
    }
    if (prevProps.updateCart !== placeorder.updateCart) {
      this.updateCart(placeorder.updateCart);
    }
    if (prevProps.updateaddress !== placeorder.updateaddress) {
      this.updateAddress(placeorder.updateaddress);
    }
    if (prevProps.addaddress !== placeorder.addaddress) {
      this.addAddressNew(placeorder.addaddress);
    }
    if (prevProps.deletedata !== placeorder.deletedata) {
      this.deleteAddress(placeorder.deletedata);
    }
    if (prevProps.addcard !== placeorder.addcard) {
      this.addCardData(placeorder.addcard);
    }
    if (prevProps.deletecard !== placeorder.deletecard) {
      this.deleteCard(placeorder.deletecard);
    }
    
  }

  deleteCard(data:any) {
    if(data.status === 200) {
      this.getCard();
    }
  }

  addCardData(data:any) {
    if(data.status === 200) {
      this.setState({
        cardnumber: "",
        cardholder: "",
        month: 1,
        year: 2020,
      });
      this.getCard();
    }
  }

  addAddressNew(data:any) {
    if(data.status === 200) {
      this.setState({
        showSection: (this.state.showSection = false),
      });
      this.getAddressDetails();
    }
  }

  deleteAddress(data:any) {
    if(data.status === 200) {
     
      this.getAddressDetails();
    }
  }

  updateAddress(data:any) {
    if(data.status === 200) {
      this.setState({
        showSection: (this.state.showSection = false),
      });
      this.getAddressDetails();
    }
  }

  updateCart(data:any) {
    if(data.status === 200) {
      this.getCartData();
    }
  }

  orderSuccess(data:any) {
    if(data.status === 200) {
      console.log("payment",data)
      // window.location.href = "/payment"
      this.props.history.push({
        pathname: "/payment",
      state: { data: data.resultObject },
      });
    }
  }

  /**
   *
   * @param data : coupon applied details
   */
  CouponappliedDetails(data: any) {
    console.log("data", data);
    if (data.status === 200) {
      this.setState({
        couponapplieddata: (this.state.couponapplieddata = data.resultObject),
        openModel: (this.state.openModel = false),
        couponShow: (this.state.couponShow = true),
        couponid: data.resultObject.couponId,
      });
      var total: any = this.state.cartarray
        ? this.state.cartarray.reduce(
            (sum: number, i: any) => (sum += i.sellingPrice),
            0
          )
        : 0;
      let coupondata: any = this.state.couponapplieddata;
      console.log("data", coupondata);
      var numVal1: any = total;
      // console.log("numVal1", numVal1);
      var numVal2: any = (
        ((coupondata.minAmountOrder - coupondata.sellingPrice) /
          coupondata.minAmountOrder) *
        100
      ).toFixed(2);
      // console.log("numVal2", numVal2);
      var numval3: any = numVal2 / 100;
      var totalValue = numVal1 - numVal1 * numval3;
      // console.log("totalValue", totalValue);
      this.setState({
        discount: (this.state.discount = (numVal1 * numval3).toFixed(2)),
        totalpay: (this.state.totalpay = totalValue.toFixed(2)),
      });
    }
  }

  /**
   *
   * @param data : get apply coupon details
   */
  getApplyCouponDetails(data: any) {
    console.log("getApplyCouponDetails", data);
    if (data.status === 200) {
      this.setState({
        couponShow: (this.state.couponShow = true),
        couponid: data.resultObject.couponID,
      });
    }
  }

  /**
   *
   * @param data : remove apply coupon
   */
  removeCouponApplied(data: any) {
    console.log("data", data);
    if (data.status === 200) {
      this.setState({
        couponShow: (this.state.couponShow = false),
      });
    }
  }

  /**
   *
   * @param data : get coupon details
   */
  getCouponDetails(data: any) {
    // console.log("data",data);
    this.setState({
      coupondetails: (this.state.coupondetails = data),
    });
  }

  /**
   *
   * @param data : get card data
   */
  getCardDetails(data: any) {
    this.setState({
      carddata: (this.state.carddata = data),
    });
  }

  /**
   *
   * @param data : get address details
   */
  getAddressDetailsData(data: any) {
    this.setState({
      isLoading:false,
      addressarray: (this.state.addressarray = data.data),
    });
  }

  /**
   *
   * @param event : update state value
   * @param index : index number
   */
  onChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   *
   * @param data : get cart all items
   */
  getCartAllProductData(data: any) {
    this.setState({
      qtydisable:this.state.qtydisable = false,
      cartarray: (this.state.cartarray = data.data),
    });
    localStorage.setItem("cartcount", data.totalcount);
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      var total: any = this.state.cartarray
        ? this.state.cartarray.reduce(
            (sum: number, i: any) => (sum += i.sellingPrice),
            0
          )
        : 0;
      this.setState({
        cartarray: (this.state.cartarray = data.data),
        totalpay: total.toFixed(2),
      });
      var numVal1: any = total ? total : 0;
      var coupon: any = this.state.couponapplieddata
        ? this.state.couponapplieddata
        : "";
      var numVal2: any = (
        ((coupon.minAmountOrder - coupon.sellingPrice) /
          coupon.minAmountOrder) *
        100
      ).toFixed(2);
      // console.log("numVal2", numVal2);
      var numval3: any = numVal2 / 100;
      var totalValue = numVal1 - numVal1 * numval3;
      this.setState({
        discount: (this.state.discount = this.state.couponapplieddata
          ? (numVal1 * numval3).toFixed(2)
          : "0"),
        totalpay: (this.state.totalpay = this.state.couponapplieddata
          ? totalValue.toFixed(2)
          : total),
      });
      // console.log("coupon",coupon)
      // console.log("minamount",coupon.minAmountOrder,total)
      if (coupon.minAmountOrder > total) {
        this.setState({
          isShowApplied: (this.state.isShowApplied = true),
          discount: (this.state.discount = "0"),
          totalpay: (this.state.totalpay = total),
        });
      } else {
        this.setState({
          isShowApplied: (this.state.isShowApplied = false),
        });
      }
    } else {
      this.setState({
        discount: (this.state.discount = "0"),
        totalpay: (this.state.totalpay = "0"),
      });
      EventEmitter.dispatch("count", 0);
      localStorage.setItem("cartcount", "0");
    }
  }

  /** Get current location */
  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      this.getAddress(this.state.lat, this.state.long);
    });
  }

  /**
   *
   * @param latitude : get current latitude value
   * @param longitude : get current longitude value
   */
  async getAddress(latitude: any, longitude: any) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      var request: any = new XMLHttpRequest();

      var method = "GET";
      var url =
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        latitude +
        "," +
        longitude +
        "&sensor=true&key=AIzaSyAAyBoIK3-3psCrVDMpZCKj5zaMmDAPp0I";
      var async = true;

      request.open(method, url, async);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var address = data.results[0];
            // console.log("address", address);
            if (address && address.address_components.length > 0) {
              _this.setState({
                area: address.address_components[1].long_name
                  .toString()
                  .toLowerCase(),
                city: address.address_components[3].long_name
                  .toString()
                  .toLowerCase(),
                state: address.address_components[4].long_name
                  .toString()
                  .toLowerCase(),
                country: address.address_components[5].long_name
                  .toString()
                  .toLowerCase(),
                pincode: address.address_components[6].long_name,
                address: address.formatted_address,
              });
            }
            resolve(address);
          } else {
            reject(request.status);
          }
        }
      };
      request.send();
    });
  }

  /**
   *
   * @param event : change state when update address
   */
  addressChange(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /** Check valid || invalid data */
  validate() {
    let nameerror = "";
    let mobileerror = "";
    let addresserror = "";
    let cityerror = "";
    let stateerror = "";
    let countryerror = "";
    let pincodeerror = "";
    let landmarkerror = "";

    if (!this.state.name) {
      nameerror = "please enter name";
    }

    if (!this.state.address) {
      addresserror = "please enter address";
    }

    if (!this.state.city) {
      cityerror = "please enter city";
    }

    if (!this.state.state) {
      stateerror = "please enter state";
    }

    if (!this.state.country) {
      countryerror = "please enter country";
    }

    var regex = /^\d{6}$/;
    if (!this.state.pincode) {
      pincodeerror = "please enter pincode";
    } else if (!regex.test(this.state.pincode)) {
      pincodeerror = "please enter valid pincode";
    }

    if (!this.state.landmark) {
      landmarkerror = "please enter landmark";
    }

    const mobileRegex: any = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!this.state.mobile) {
      mobileerror = "please enter mobile number";
    } else if (!mobileRegex.test(this.state.mobile)) {
      mobileerror = "please enter valid mobile number";
    }

    if (
      nameerror ||
      mobileerror ||
      addresserror ||
      cityerror ||
      stateerror ||
      countryerror ||
      pincodeerror ||
      landmarkerror
    ) {
      this.setState({
        nameerror,
        mobileerror,
        addresserror,
        cityerror,
        stateerror,
        countryerror,
        pincodeerror,
        landmarkerror,
      });
      return false;
    }
    return true;
  }

  /**
   *
   * @param data : increment quantity in cart product
   */
 async incrementQty(data: any) {
  this.setState({
    qtydisable:true
  })
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const mid: any = localStorage.getItem("merchantID");
    const obj: addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity + 1,
      discountApplied: data.discountApplied,
      merchantID: data.merchantID,
    };
    await this.props.updateToCart(obj, data.orderCartID);
    // setTimeout(() => {
    //   this.getCartData();
    // }, 200);
  }

  /**
   *
   * @param data : decrement quantity in cart product
   */
  async decrementQty(data: any) {
    this.setState({
      qtydisable:true
    })
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const mid: any = localStorage.getItem("merchantID");
    const obj: addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity - 1,
      discountApplied: data.discountApplied,
      merchantID: data.merchantID,
    };
    await this.props.updateToCart(obj, data.orderCartID);
    // setTimeout(() => {
    //   this.getCartData();
    // }, 200);
  }

  /** Add Address functionality */
  async addAddress() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        nameerror: "",
        mobileerror: "",
        addresserror: "",
        cityerror: "",
        stateerror: "",
        countryerror: "",
        pincodeerror: "",
        landmarkerror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      const obj: addAddressRequest = {
        userID: user.userID,
        name: this.state.name,
        mobile: this.state.mobile,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pincode: parseInt(this.state.pincode),
        landmark: this.state.landmark,
        addressType:
          this.state.addresstype === "1"
            ? "1"
            : this.state.addresstype === "2"
            ? "2"
            : this.state.addresstype === "3"
            ? "3"
            : "",
        isActive: true,
      };
      await this.props.addAddress(obj);

      // setTimeout(() => {
      //   this.getAddressDetails();
      // }, 300);
    }
  }

  /**
   *
   * @param data : get address data
   */
  getAddressData(data: any) {
    // console.log("data", data);
    if (data.addressType === "Home") {
      this.setState({
        workdisabled: true,
        otherdisabled: true,
      });
    } else if (data.addressType === "Work") {
      this.setState({
        homedisabled: true,
        otherdisabled: true,
      });
    } else if (data.addressType === "Other") {
      this.setState({
        homedisabled: true,
        workdisabled: true,
      });
    }
    this.setState({
      showSection: (this.state.showSection = true),
      updateTrue: (this.state.updateTrue = true),
      addressid: data.addressID,
      name: data.name,
      mobile: data.mobile,
      pincode: data.pincode,
      landmark: data.landmark,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      addresstype:
        data.addressType === "Home"
          ? "1"
          : data.addressType === "Work"
          ? "2"
          : data.addressType === "Other"
          ? "3"
          : "",
    });
  }

  /** Edit Address value */
 async editAddress() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        nameerror: "",
        mobileerror: "",
        addresserror: "",
        cityerror: "",
        stateerror: "",
        countryerror: "",
        pincodeerror: "",
        landmarkerror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      const obj: addAddressRequest = {
        addressID: this.state.addressid,
        userID: user.userID,
        name: this.state.name,
        mobile: this.state.mobile,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pincode: parseInt(this.state.pincode),
        landmark: this.state.landmark,
        addressType:
          this.state.addresstype === "1"
            ? "1"
            : this.state.addresstype === "2"
            ? "2"
            : this.state.addresstype === "3"
            ? "3"
            : "",
        isActive: true,
      };
      await this.props.updateAddress(obj);

      // setTimeout(() => {
      //   this.getAddressDetails();
      // }, 200);
    }
  }

  /**
   *
   * @param id : delete address id
   * @param text : message text
   * @param btext : button message text
   */
  async deleteAddressData(id: any, text: any, btext: any) {
    if (await alertMessage(text, btext)) {
      let deleteArray = [];
      deleteArray.push(id);
      const obj: removeCartItemRequest = {
        moduleName: "Address",
        id: deleteArray,
      };
     await this.props.deleteAddress(obj);

      // setTimeout(() => {
      //   this.getAddressDetails();
      // }, 200);
    }
  }

  /** Show Card section */
  showCardSection() {
    this.setState({
      cardnumbererror: "",
      cardholdererror: "",
      cardnumber: "",
      cardholder: "",
      month: 1,
      year: 2020,
      cardUpdateTrue: (this.state.cardUpdateTrue = false),
      isCard: (this.state.isCard = true),
    });
  }

  /** Add Address Block */
  addressBlock() {
    return (
      <div className="pro-box1 delvy-adres">
        <div className="dis-box">
          <div className="dis-left">
            <div className="tt-1">
              <span className="numbr">2</span>
              <h2 className="tt-l">Delivery Address</h2>
            </div>
            {/* <!-- <div className="nm-info  show-1">
                        <p><span className="b-tt">Kuldeep akbari</span> shreerangnagar block no 59 , nanamava road, opp om residansy rajkot, Rajkot, Gujarat</p>
                    </div> --> */}
            <div className="nm-info">
              <div className="main0adress">
                {
                  this.state.isLoading === false ? (

                    this.state.addressarray
                      ? (this.state.addressarray.length > 0 &&
                        this.state.addressarray.map(
                          (address: any, index: number) => (
                            <div className="adrss-1" key={index}>
                              <div
                                className="row"
                                style={{ justifyContent: "flex-end" }}
                              >
                                <i
                                  className="fas fa-edit edit-adres"
                                  onClick={() => this.getAddressData(address)}
                                ></i>
                                <i
                                  className="fas fa-trash edit-adres ml-4"
                                  onClick={() =>
                                    this.deleteAddressData(
                                      address.addressID,
                                      "You should be Remove address?",
                                      "Yes, Remove it"
                                    )
                                  }
                                ></i>
                              </div>
                              <label className="rdio-box1">
                                <span className="b-tt">{address.name}</span>{" "}
                                <span className="add-type">
                                  {address.addressType}
                                </span>{" "}
                                <span className="b-tt">{address.mobile}</span>
                                <span className="adress-rdio">
                                  {address.address}
                                  <span className="b-tt"> - {address.pincode}</span>
                                </span>
                                <input
                                  type="radio"
                                  id={address.addressID}
                                  className="form-control"
                                  checked={
                                    this.state.mainaddress === address.addressID
                                      ? true
                                      : false
                                  }
                                  onChange={this.change}
                                  name="main"
                                />
                                <span className="checkmark"></span>
                              </label>
                              <a
                                className="chk-outbtn"
                                id={address.addressID}
                                onClick={this.change}
                              >
                                CONTINUE CHECKOUT
                              </a>
                            </div>
                          )
                        )
                      ):('')
                  ) : (
                    [1, 2, 3, 4].map((data: any, index: number) => (
                      <div key={index}>
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <h3 className="tt-1">
                          <Skeleton count={1}>
      
                          </Skeleton>
                            </h3>
                          <p>
                            <Skeleton count={5} />
                          </p>
                         
                        </SkeletonTheme>
                      </div>
                    ))
                  )
                }
              </div>
              <div className="add-new-adres" onClick={this.showSection}>
                <span className="add-icon">+</span>
                <div>Add a new address</div>
              </div>
              {this.state.showSection === true ? (
                <div className="edit-dtle">
                  <form className="form-1">
                    <label className="rdio-box1">
                      <span className="b-tt">ADD A NEW ADDRESS</span>
                      <input
                        type="radio"
                        checked={true}
                        onChange={this.change}
                        name="radioa"
                      />
                      <span className="checkmark"></span>
                    </label>
                    <button
                      className="add-location"
                      onClick={this.getCurrentLocation}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="-fgCFc"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h16v16H0z"></path>
                          <path
                            className=""
                            fill="#fff"
                            d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"
                          ></path>
                        </g>
                      </svg>
                      Use my current location
                    </button>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from1"
                            name="name"
                            className="form-control"
                            value={this.state.name ? this.state.name : ""}
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from1"
                          >
                            Name
                          </label>
                          <div className="text-danger">
                            {this.state.nameerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from2"
                            name="mobile"
                            maxLength={10}
                            value={this.state.mobile ? this.state.mobile : ""}
                            className="form-control"
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from2"
                          >
                            10-digit mobile number
                          </label>
                          <div className="text-danger">
                            {this.state.mobileerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            id="from3"
                            name="pincode"
                            value={this.state.pincode ? this.state.pincode : ""}
                            className="form-control"
                            onChange={this.addressChange}
                            maxLength={6}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from3"
                          >
                            Pincode
                          </label>
                          <div className="text-danger">
                            {this.state.pincodeerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from4"
                            name="landmark"
                            value={
                              this.state.landmark ? this.state.landmark : ""
                            }
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from4"
                          >
                            Landmark
                          </label>
                          <div className="text-danger">
                            {this.state.landmarkerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            id="from5"
                            name="address"
                            value={this.state.address ? this.state.address : ""}
                            onChange={this.addressChange}
                            className="form-control"
                          ></textarea>
                          <label
                            className="form-control-placeholder"
                            htmlFor="from5"
                          >
                            Address (Area and Street)
                          </label>
                          <div className="text-danger">
                            {this.state.addresserror}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from6"
                            name="city"
                            value={this.state.city ? this.state.city : ""}
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from6"
                          >
                            City/District/Town
                          </label>
                          <div className="text-danger">
                            {this.state.cityerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from7"
                            name="state"
                            value={this.state.state ? this.state.state : ""}
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from7"
                          >
                            State
                          </label>
                          <div className="text-danger">
                            {this.state.stateerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="from8"
                            name="country"
                            value={this.state.country ? this.state.country : ""}
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from8"
                          >
                            Country
                          </label>
                          <div className="text-danger">
                            {this.state.countryerror}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="address-type">
                          <span className="text-add">Address Type</span>
                          <div className="radio-dis">
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Home</span>
                                <input
                                  type="radio"
                                  id="1"
                                  checked={
                                    this.state.addresstype === "1"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeAddress}
                                  name="radio"
                                  disabled={
                                    this.state.homedisabled === true
                                      ? true
                                      : false
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Work</span>
                                <input
                                  type="radio"
                                  id="2"
                                  checked={
                                    this.state.addresstype === "2"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeAddress}
                                  name="radio"
                                  disabled={
                                    this.state.workdisabled === true
                                      ? true
                                      : false
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <div className="adrss-1">
                              <label className="rdio-box1">
                                <span className="b-tt">Other</span>
                                <input
                                  type="radio"
                                  id="3"
                                  checked={
                                    this.state.addresstype === "3"
                                      ? true
                                      : false
                                  }
                                  onChange={this.changeAddress}
                                  name="radio"
                                  disabled={
                                    this.state.otherdisabled === true
                                      ? true
                                      : false
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        {this.state.updateTrue === false ? (
                          <button
                            type="button"
                            className="save-delivry"
                            onClick={this.addAddress}
                          >
                            Save and Deliver Here
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="save-delivry"
                            onClick={this.editAddress}
                          >
                            Save and Deliver Here
                          </button>
                        )}

                        <button
                          className="btb-text"
                          onClick={() =>
                            this.setState({
                              showSection: false,
                            })
                          }
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* <div className="dis-right">
          <button className="change1">CHANGE</button>
        </div> */}
        </div>
      </div>
    );
  }

  validateUPI() {
    let upiiderror = "";

    var regex = /^.+@.+$/;
    if (!this.state.upiid) {
      upiiderror = "please enter upi id";
    } else if (!regex.test(this.state.upiid)) {
      upiiderror = "please enter valid upi id";
    }

    if (upiiderror) {
      this.setState({
        upiiderror,
      });
      return false;
    }
    return true;
  }

  async payWithUPI() {
    const isValid = this.validateUPI();
    if (isValid) {
      this.setState({
        upiiderror: "",
      });
      let _this:any = this;
      let order: any = [];
      if (this.state.cartarray) {
        this.state.cartarray.map((cart: any, index: number) => {
          order.push({
            productId: cart.productID,
            orderQty: cart.quantity,
            productPrice: cart.sellingPrice,
          });
        });
      }

      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      var total: any = this.state.cartarray.reduce(
        (sum: number, i: any) => (sum += i.sellingPrice),
        0
      );
      const obj: any = {
        amount: (total * 100),
        currency: "INR",
      };
      const getOrderData: any = await OrderAPI.getOrderData(obj);
      console.log("getOrderData", getOrderData);

      if (getOrderData.data.resultObject) {
        var razorpay = new Razorpay({
          key: "rzp_test_c9r1dW7E0qCBz5",
          // logo, displayed in the popup
          image: "https://i.imgur.com/n5tjHFD.png",
        });

        var data: any = {
          amount: (total * 100), // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
          currency: "INR", // Default is INR. We support more than 90 currencies.
          email: user.email,
          contact: user.phone,
          order_id: getOrderData.data.resultObject
            ? getOrderData.data.resultObject.id
            : "0000", // Replace with Order ID generated in Step 4
          method: "upi",
          upi: {
            vpa: this.state.upiid,
            flow: "collect",
          },
        };
        razorpay.createPayment(data);

        razorpay.on("payment.success", function (resp: any) {
          console.log("resp", resp);
          const obj = {
            userID: user.userID,
            couponID: _this.state.couponid ? _this.state.couponid : 0,
            addressID: _this.state.mainaddress ? _this.state.mainaddress : 0,
            paymentMethod: "UPI",
            paymentStatus: "Success",
            distance: 0,
            totalQty: _this.state.cartarray ? _this.state.cartarray.length : 0,
            totalAmount: parseInt(_this.state.totalpay),
            discountAmount: _this.state.discount
              ? parseInt(_this.state.discount)
              : 0,
            taxAmount: 0,
            deliveryAmount: 0,
            razorpayPaymentID: resp.razorpay_payment_id,
            razorpayOrderID: resp.razorpay_order_id,
            razorpaySignature: resp.razorpay_signature,
            orderDetails: order
          };
          _this.props.createOrder(obj);
        }); // will pass payment ID, order ID, and Razorpay signature to success handler.

        razorpay.on("payment.error", function (resp: any) {
          alert(resp.error.description);
        }); // will pass error object to error handler
      }
    }
  }

  /** UPI payment block */
  UPIBlock() {
    return (
      <div className="adrss-1">
        <label className="rdio-box1">
          <input
            type="radio"
            id="1"
            checked={this.state.paymenttype === 1 ? true : false}
            onChange={this.changePaymentUPI}
            name="payment"
          />
          <span className="checkmark"></span>
        </label>
        <div className="upi-payment">
          <div className="tt-line">
            <img src={placeorder.upiLogo} alt="" />
            <span className="tt-radio">UPI (PhonePe / Paytm / Google Pay)</span>
          </div>
          {this.state.paymenttype === 1 ? (
            <div className="pey-upi">
              <div className="opti1 opti2">
                <div className="box-input1">
                  <div className="form-group" style={{marginBottom:'0px'}}>
                    <input
                      type="text"
                      id="from"
                      name="upiid"
                      className="form-control"
                      onChange={this.onChangeEvent}
                      required
                    />
                    <label className="form-control-placeholder" htmlFor="from">
                      Enter UPI ID
                    </label>
                  </div>
                  <button className="continue-btn" onClick={this.payWithUPI}>
                    PAY
                  </button>
                  <div className="text-danger">{this.state.upiiderror}</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  /**
   *
   * @param e : wallet id
   */
  changeWallet(e: any) {
    this.setState({
      changewallet: (this.state.changewallet = parseInt(e.target.id)),
    });
  }

  /** Validate Id */
  validateWallet() {
    let walletnumbererror = "";

    const mobileRegexe: any = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!this.state.walletnumber) {
      walletnumbererror = "please enter mobile number";
    } else if (!mobileRegexe.test(this.state.walletnumber)) {
      walletnumbererror = "please enter valid mobile number";
    }

    if (walletnumbererror) {
      this.setState({
        walletnumbererror,
      });
      return false;
    }
    return true;
  }

  async payWallet(data: any) {
    const isValid = this.validateWallet();
    if (isValid) {
      this.setState({
        walletnumbererror: "",
      });
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    var total: any = this.state.cartarray.reduce(
      (sum: number, i: any) => (sum += i.sellingPrice),
      0
    );
    const obj: any = {
      amount: (total * 100),
      currency: "INR",
    };

    let _this:any = this;
      let order: any = [];
      if (this.state.cartarray) {
        this.state.cartarray.map((cart: any, index: number) => {
          order.push({
            productId: cart.productID,
            orderQty: cart.quantity,
            productPrice: cart.sellingPrice,
          });
        });
      }
    const getOrderData: any = await OrderAPI.getOrderData(obj);
    console.log("getOrderData", getOrderData);

    if (getOrderData.data.resultObject) {
      var razorpay = new Razorpay({
        key: "rzp_test_c9r1dW7E0qCBz5",
        // logo, displayed in the popup
        image: "https://i.imgur.com/n5tjHFD.png",
      });

      var data: any = {
        amount: (total * 100),// in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
        currency: "INR", // Default is INR. We support more than 90 currencies.
        email: user.email,
        contact: this.state.walletnumber,
        order_id: getOrderData.data.resultObject
          ? getOrderData.data.resultObject.id
          : "0000", // Replace with Order ID generated in Step 4
        method: "wallet",
        wallet: data,
      };
      razorpay.createPayment(data);

      razorpay.on("payment.success", function (resp: any) {
        console.log("resp", resp);
        const obj = {
          userID: user.userID,
          couponID: _this.state.couponid ? _this.state.couponid : 0,
          addressID: _this.state.mainaddress ? _this.state.mainaddress : 0,
          paymentMethod: "Wallet",
          paymentStatus: "Success",
          distance: 0,
          totalQty: _this.state.cartarray ? _this.state.cartarray.length : 0,
          totalAmount: parseInt(_this.state.totalpay),
          discountAmount: _this.state.discount
            ? parseInt(_this.state.discount)
            : 0,
          taxAmount: 0,
          deliveryAmount: 0,
          razorpayPaymentID: resp.razorpay_payment_id,
          razorpayOrderID: resp.razorpay_order_id,
          razorpaySignature: resp.razorpay_signature,
          orderDetails: order
        };
        _this.props.createOrder(obj);
      }); // will pass payment ID, order ID, and Razorpay signature to success handler.

      razorpay.on("payment.error", function (resp: any) {
        alert(resp.error.description);
      }); // will pass error object to error handler
    }
  }
  }

  /** Wallet payment block */
  walletBlock() {
    return (
      <div className="adrss-1">
        <label className="rdio-box1">
          <input
            type="radio"
            id="2"
            checked={this.state.paymenttype === 2 ? true : false}
            onChange={this.changePaymentUPI}
            name="payment"
          />
          <span className="checkmark"></span>
        </label>

        <div className="upi-payment">
          <div className="tt-line">
            <img src={placeorder.wallet} alt="" />
            <span className="tt-radio">Wallets</span>
          </div>
          {this.state.paymenttype === 2 ? (
            <div className="pey-upi">
              {this.state.freecharge === true ? (
                <div className="opti1 opti2">
                  <label className="rdio-box1">
                    <span className="tt-radio">FreeCharge</span>
                    <input
                      type="radio"
                      id="1"
                      checked={this.state.changewallet === 1 ? true : false}
                      onChange={this.changeWallet}
                      name="radio"
                    />
                    <span className="checkmark"></span>
                  </label>
                  {this.state.changewallet === 1 ? (
                    <div className="box-input1">
                      <div className="form-group" style={{marginBottom:'0px'}}>
                        {/* <span className="verfy-tt">Link Now</span> */}
                        <input
                          type="text"
                          id="walletnumber"
                          name="walletnumber"
                          className="form-control"
                          onChange={this.onChangeEvent}
                          maxLength={10}
                          required
                        />
                        <label
                          className="form-control-placeholder"
                          htmlFor="walletnumber"
                        >
                          Enter linked no.
                        </label>
                      </div>
                        <div className="text-danger">
                          {this.state.walletnumbererror}
                        </div>
                      <button
                        id="rzp-button1"
                        className="continue-btn"
                        onClick={() => this.payWallet("freecharge")}
                      >
                        PAY
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : null}
              {this.state.olamoney === true ? (
                <div className="opti1 opti2">
                  <label className="rdio-box1">
                    <span className="tt-radio">Olamoney</span>
                    <input
                      type="radio"
                      id="2"
                      checked={this.state.changewallet === 2 ? true : false}
                      onChange={this.changeWallet}
                      name="radio"
                    />
                    <span className="checkmark"></span>
                  </label>
                  {this.state.changewallet === 2 ? (
                    <div className="box-input1">
                      <div className="form-group">
                        {/* <span className="verfy-tt">Link Now</span> */}
                        <input
                          type="text"
                          id="walletnumber2"
                          name="walletnumber"
                          className="form-control"
                          onChange={this.onChangeEvent}
                          maxLength={10}
                          required
                        />
                        <label
                          className="form-control-placeholder"
                          htmlFor="walletnumber2"
                        >
                          Enter linked no.
                        </label>
                        <div className="text-danger">
                          {this.state.walletnumbererror}
                        </div>
                      </div>
                      <button
                        id="rzp-button1"
                        className="continue-btn"
                        onClick={() => this.payWallet("olamoney")}
                      >
                        PAY
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : null}
              {this.state.payzapp === true ? (
                <div className="opti1 opti2">
                  <label className="rdio-box1">
                    <span className="tt-radio">Payzapp</span>
                    <input
                      type="radio"
                      id="3"
                      checked={this.state.changewallet === 3 ? true : false}
                      onChange={this.changeWallet}
                      name="radio"
                    />
                    <span className="checkmark"></span>
                  </label>
                  {this.state.changewallet === 3 ? (
                    <div className="box-input1">
                      <div className="form-group">
                        {/* <span className="verfy-tt">Link Now</span> */}
                        <input
                          type="text"
                          id="walletnumber3"
                          name="walletnumber"
                          className="form-control"
                          onChange={this.onChangeEvent}
                          maxLength={10}
                          required
                        />
                        <label
                          className="form-control-placeholder"
                          htmlFor="walletnumber3"
                        >
                          Enter linked no.
                        </label>
                        <div className="text-danger">
                          {this.state.walletnumbererror}
                        </div>
                      </div>
                      <button
                        className="continue-btn"
                        onClick={() => this.payWallet("payzapp")}
                      >
                        PAY
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : null}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  /**
   *
   * @param e : month value
   */
  onMonthChange(e: any) {
    this.setState({
      month: (this.state.month = parseInt(e.target.value)),
    });
    // console.log("month", this.state.month);
  }

  /**
   *
   * @param e : year value
   */
  onYearChange(e: any) {
    // console.log("year", e.target.value, this.state.year);
    this.setState({
      year: (this.state.year = parseInt(e.target.value)),
    });
  }

  /**
   *
   * @param event : update state
   */
  onPaymentChange(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /** Check card validation using regex */
  validateCard() {
    let cardnumbererror = "";
    let cardholdererror = "";
    let montherror = "";

    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    if (!this.state.cardnumber) {
      cardnumbererror = "please enter card number";
    } else if (!regex.test(this.state.cardnumber)) {
      cardnumbererror = "please enter valid card number";
    }

    var namee = /[A-Za-z]$/;
    if (!this.state.cardholder) {
      cardholdererror = "please enter card holder name";
    } else if (!namee.test(this.state.cardholder)) {
      cardholdererror = "please enter valid card holder number";
    }

    const tempMonth: any = this.state.month;
    const tempYear: any = this.state.year;
    let isValid1 = true;
    if (new Date().getFullYear() === tempYear) {
      if (tempMonth < new Date().getMonth() + 1) {
        isValid1 = false;
      }
    }

    if (isValid1 === false) {
      montherror = "please select enter valid date or year";
    }

    if (cardnumbererror || cardholdererror || montherror) {
      this.setState({
        cardnumbererror,
        cardholdererror,
        montherror,
      });
      return false;
    }
    return true;
  }

  /** Add Card (credit/debit) */
  async addCard() {
    const isValid = this.validateCard();
    if (isValid) {
      this.setState({
        cardnumbererror: "",
        cardholdererror: "",
        montherror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);

      if (this.state.cardnumber) {
        var visaCards = creditCardType(this.state.cardnumber);
        // console.log("card type", visaCards[0].type);
        this.setState({
          cardtype: (this.state.cardtype = visaCards[0].type),
        });
      }

      // const obj = {
      //   id: user.userID,
      //   cardNumber: this.state.cardnumber,
      //   cardName: this.state.cardholder,
      //   cardType: this.state.cardtype,
      //   expiryMonth: this.state.month,
      //   expiryYear: this.state.year,
      //   isActive: true,
      // };
      // await this.props.addCard(obj);
    
    }
  }

  /**
   *
   * @param e : cvv enter with card
   */
  changeCVV(data: any) {
    // console.log("data", data);
    this.setState({
      cvvid: (this.state.cvvid = parseInt(data.cardID)),
      cardnumber: data.cardNumber,
      cardholder: data.cardName,
      month: data.expiryMonth,
      year: data.expiryYear,
    });
  }

  /**
   *
   * @param data : get card data
   */
  getCardData(data: any) {
    // console.log("data", data);
    this.setState({
      isCard: (this.state.isCard = true),
      cardUpdateTrue: (this.state.cardUpdateTrue = true),
      cardid: data.cardID,
      cardholder: data.cardName,
      cardnumber: data.cardNumber,
      month: data.expiryMonth,
      year: data.expiryYear,
      cardtype: data.cardType,
    });
  }

  /** Edit card */
  editCard() {
    const isValid = this.validateCard();
    if (isValid) {
      this.setState({
        cardnumbererror: "",
        cardholdererror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      if (this.state.cardnumber) {
        var visaCards = creditCardType(this.state.cardnumber);
        // console.log("card type", visaCards[0].type);
        this.setState({
          cardtype: (this.state.cardtype = visaCards[0].type),
        });
      }
      const obj = {
        cardID: this.state.cardid,
        id: user.userID,
        cardNumber: this.state.cardnumber,
        cardName: this.state.cardholder,
        cardType: this.state.cardtype,
        expiryMonth: this.state.month,
        expiryYear: this.state.year,
        isActive: true,
      };
      this.props.updateCard(obj);
      setTimeout(() => {
        this.setState({
          cardnumber: "",
          cardholder: "",
          month: 1,
          year: 2020,
        });
        this.getCard();
      }, 250);
    }
  }

  /**
   *
   * @param id : delete card data
   * @param text : message card
   * @param btext : button message
   */
  async deleteCardData(id: any, text: any, btext: any) {
    if (await alertMessage(text, btext)) {
      let deleteCardArray = [];
      deleteCardArray.push(id);
      const obj = {
        moduleName: "Card",
        id: deleteCardArray,
      };
      this.props.deleteCard(obj);

      setTimeout(() => {
        this.getCard();
      }, 200);
    }
  }

  /** Check valid || invalid  CVV data */
  validateCVV() {
    let cvverror = "";

    var regex = /^[0-9]{3,4}$/;
    if (!this.state.cvv) {
      cvverror = "please enter cvv";
    } else if (!regex.test(this.state.cvv)) {
      cvverror = "please enter valid cvv";
    }

    if (cvverror) {
      this.setState({
        cvverror,
      });
      return false;
    }
    return true;
  }

  async paymentWithCard() {
    const isValid = this.validateCVV();
    if (isValid) {
      this.setState({
        cvverror: "",
      });

      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);

      if (this.state.cartarray) {
        var total: any = this.state.cartarray.reduce(
          (sum: number, i: any) => (sum += i.sellingPrice),
          0
        );
      }

      const obj: any = {
        amount: (total * 100),
        currency: "INR",
      };
      const getOrderData: any = await OrderAPI.getOrderData(obj);
      console.log("getOrderData", getOrderData);

      let order: any = [];
      if (this.state.cartarray) {
        this.state.cartarray.map((cart: any, index: number) => {
          order.push({
            productId: cart.productID,
            orderQty: cart.quantity,
            productPrice: cart.sellingPrice,
          });
        });
      }

      if (getOrderData.data.resultObject) {
        let _this: any = this;
        var razorpay = new Razorpay({
          key: "rzp_test_c9r1dW7E0qCBz5",
          // logo, displayed in the popup
          image: "https://i.imgur.com/n5tjHFD.png",
        });

        var data: any = {
          amount: (total * 100), // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
          currency: "INR", // Default is INR. We support more than 90 currencies.
          email: user.email,
          contact: user.phone,
          order_id: getOrderData.data.resultObject
            ? getOrderData.data.resultObject.id
            : "0000", // Replace with Order ID generated in Step 4
          method: "card",
          "card[name]": `${this.state.cardholder}`,
          "card[number]": `${this.state.cardnumber}`,
          "card[cvv]": `${this.state.cvv}`,
          "card[expiry_month]": `${this.state.month}`,
          "card[expiry_year]": `${this.state.year}`,
        };
        razorpay.createPayment(data);

        razorpay.on("payment.success", function (resp: any) {
          console.log("resp", resp);
          const obj = {
            userID: user.userID,
            couponID: _this.state.couponid ? _this.state.couponid : 0,
            addressID: _this.state.mainaddress ? _this.state.mainaddress : 0,
            paymentMethod: "Card",
            paymentStatus: "Success",
            distance: 0,
            totalQty: _this.state.cartarray ? _this.state.cartarray.length : 0,
            totalAmount: parseInt(_this.state.totalpay),
            cardNumber:_this.state.cardnumber,
            cardExpiryMonth:_this.state.month,
            cardExpiryYear:_this.state.year,
            discountAmount: _this.state.discount
              ? parseInt(_this.state.discount)
              : 0,
            taxAmount: 0,
            deliveryAmount: 0,
            razorpayPaymentID: resp.razorpay_payment_id,
            razorpayOrderID: resp.razorpay_order_id,
            razorpaySignature: resp.razorpay_signature,
            orderDetails: order
          };
          _this.props.createOrder(obj);
        }); // will pass payment ID, order ID, and Razorpay signature to success handler.

        razorpay.on("payment.error", function (resp: any) {
          alert(resp.error.description);
        }); // will pass error object to error handler
      }
    }
  }

  /** Toogle cvv information block */
  toggle() {
    this.setState({
      cvvdesc: !this.state.cvvdesc,
    });
  }

  /** Card payment block */
  cardBlock() {
    return (
      <div className="adrss-1 pay-credit order-placed">
        <label className="rdio-box1">
          <input
            type="radio"
            id="3"
            checked={this.state.paymenttype === 3 ? true : false}
            onChange={this.changePaymentUPI}
            name="payment"
          />
          <span className="checkmark"></span>
        </label>
        <div className="upi-payment">
          <div className="tt-line">
            <img src={placeorder.card} alt="" />
            <span className="tt-radio">
              Credit/Debit/ATM Card (American
              Express,Bajaj,DICL,JCB,Maestro,MasterCard,Rupay,Visa)
            </span>
          </div>

          {this.state.paymenttype === 3 ? (
            <>
              <div className="main0adress">
                {this.state.carddata
                  ? this.state.carddata.length > 0 &&
                    this.state.carddata.map((card: any, index: any) => (
                      <div className="adrss-1" key={index}>
                        <div
                          className="row"
                          style={{ justifyContent: "flex-end" }}
                        >
                          {/* <i
                            className="fas fa-edit edit-adres"
                            style={{ color: "#f7b62b" }}
                            onClick={() => this.getCardData(card)}
                          ></i> */}
                          <i
                            className="fas fa-trash edit-adres ml-4"
                            style={{ color: "#f7b62b" }}
                            onClick={() =>
                              this.deleteCardData(
                                card.cardID,
                                "You should be Remove card?",
                                "Yes, Remove it"
                              )
                            }
                          ></i>
                        </div>

                        <label className="rdio-box1">
                          <span className="b-tt">
                            {new Array(card.cardNumber.length - 3).join("X") +
                              card.cardNumber.substr(
                                card.cardNumber.length - 4,
                                4
                              )}
                          </span>{" "}
                          <span className="cardtype">{card.cardType.toUpperCase()}</span>{" "}
                          <span className="add-type">{card.cardName}</span>{" "}
                          <input
                            type="radio"
                            id={card.cardID}
                            className="form-control"
                            checked={
                              this.state.cvvid === card.cardID ? true : false
                            }
                            onChange={() => this.changeCVV(card)}
                            name="cvvid"
                            disabled={
                              card.cardType.toUpperCase() === "AMERICAN-EXPRESS" ||
                              card.cardType.toUpperCase() ===
                               "BAJAJ" ||
                              card.cardType.toUpperCase() === this.state.DICL ||
                              card.cardType.toUpperCase() === this.state.JCB ||
                              card.cardType.toUpperCase() === this.state.MAES ||
                              card.cardType.toUpperCase() === this.state.MC ||
                              card.cardType.toUpperCase() ===
                                this.state.RUPAY ||
                              card.cardType.toUpperCase() === this.state.VISA
                                ? false
                                : true
                            }
                          />
                          <span className="checkmark"></span>
                        </label>
                        {this.state.cvvid === card.cardID ? (
                          <div>
                            <div className="form-group enter-cvv">
                              <div className="verfy-tt" onClick={this.toggle}>
                                ?
                                {this.state.cvvdesc === true ? (
                                  <div className="togle-box">
                                    <img
                                      src={placeorder.cvvcard}
                                      alt="cvv-card"
                                    />
                                    <h4 className="cvv-title">What is CVV?</h4>
                                    <span className="small-tt">
                                      The CVV number is the last three digits on
                                      the back of your card
                                    </span>
                                    <button
                                      className="close-btn"
                                      onClick={this.toggle}
                                    >
                                      Close
                                    </button>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <input
                                type="text"
                                id="from"
                                className="form-control"
                                name="cvv"
                                maxLength={4}
                                onChange={this.onChangeEvent}
                                required
                              />
                              <label
                                className="form-control-placeholder"
                                htmlFor="from"
                              >
                                CVV
                              </label>
                              <div className="text-danger">
                                {this.state.cvverror}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="chk-outbtn"
                              // onClick={this.openCheckout}

                              onClick={this.paymentWithCard}
                            >
                              Pay
                            </button>
                            <button
                              type="button"
                              className="chk-outbtn"
                              onClick={() =>
                                this.setState({
                                  cvvid: (this.state.cvvid = 0),
                                })
                              }
                            >
                              cancel
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : ""}
              </div>
              <div
                className="add-new-adres text-left"
                onClick={this.showCardSection}
              >
                <button type="button" className="chk-outbtn">
                  Add New Card
                </button>
              </div>
              {this.state.isCard === true ? (
                <div className="pey-upi">
                  <div className="opti1 opti2">
                    <div className="box-input1">
                      <div className="form-group card-nombr">
                        {/* <span className="verfy-tt">Link Now</span> */}
                        <input
                          type="text"
                          id="from9"
                          name="cardnumber"
                          className="form-control"
                          value={
                            this.state.cardnumber ? this.state.cardnumber : ""
                          }
                          onChange={this.onPaymentChange}
                          required
                        />
                        <label
                          className="form-control-placeholder"
                          htmlFor="from9"
                        >
                          Enter Card Number
                        </label>
                        <div className="text-danger">
                          {this.state.cardnumbererror}
                        </div>
                      </div>
                      <div className="form-group card-nombr">
                        <input
                          type="text"
                          id="from10"
                          name="cardholder"
                          className="form-control"
                          value={
                            this.state.cardholder ? this.state.cardholder : ""
                          }
                          onChange={this.onPaymentChange}
                          required
                        />
                        <label
                          className="form-control-placeholder"
                          htmlFor="from10"
                        >
                          Enter Card Holder Name
                        </label>
                        <div className="text-danger">
                          {this.state.cardholdererror}
                        </div>
                      </div>
                      <div className="flex-input">
                        <div className="valid-date">
                          <select
                            className="monthnm"
                            value={this.state.month ? this.state.month : ""}
                            onChange={this.onMonthChange}
                          >
                            {constant.placeorderPage.montharray.map(
                              (month: any, index: number) => (
                                <option value={month.value} key={index}>
                                  {month.title}
                                </option>
                              )
                            )}
                          </select>
                          <select
                            className="yearnm"
                            value={this.state.year ? this.state.year : ""}
                            onChange={this.onYearChange}
                          >
                            {constant.placeorderPage.yeararray.map(
                              (year: any, index: number) => (
                                <option value={year.value} key={index}>
                                  {year.title}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <div className="text-danger">
                          {this.state.montherror}
                        </div>
                      </div>
                      <div>
                        {this.state.cardUpdateTrue === true ? (
                          <button
                            className="continue-btn"
                            onClick={this.editCard}
                          >
                            Save Card
                          </button>
                        ) : (
                          <button
                            className="continue-btn"
                            onClick={this.addCard}
                          >
                            Save Card
                          </button>
                        )}

                        <button
                          className="continue-btn"
                          onClick={() =>
                            this.setState({
                              cardholdererror: "",
                              cardnumbererror: "",
                              cardholder: "",
                              cardnumber: "",
                              isCard: (this.state.isCard = false),
                            })
                          }
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  validateBank() {
    let banktypeerror = "";

    if (!this.state.banktype) {
      banktypeerror = "please select bank";
    } 
    if (banktypeerror) {
      this.setState({
        banktypeerror
      });
      return false;
    }
    return true;
  }

  async payWithNetBanking() {
    const isValid = this.validateBank();
    if (isValid) {
      this.setState({
        banktypeerror: "",
      });

    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    var total: any = this.state.cartarray.reduce(
      (sum: number, i: any) => (sum += i.sellingPrice),
      0
    );
    const obj: any = {
      amount: (total * 100),
      currency: "INR",
    };

    let order: any = [];
    if (this.state.cartarray) {
      this.state.cartarray.map((cart: any, index: number) => {
        order.push({
          productId: cart.productID,
          orderQty: cart.quantity,
          productPrice: cart.sellingPrice,
        });
      });
    }

    const getOrderData: any = await OrderAPI.getOrderData(obj);
    console.log("getOrderData", getOrderData);

    if (getOrderData.data.resultObject) {
      let _this: any = this;
      var razorpay = new Razorpay({
        key: "rzp_test_c9r1dW7E0qCBz5",
        // logo, displayed in the popup
        image: "https://i.imgur.com/n5tjHFD.png",
      });

      var data: any = {
        amount: (total * 100), // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
        currency: "INR", // Default is INR. We support more than 90 currencies.
        email: user.email,
        contact: user.phone,
        order_id: getOrderData.data.resultObject
          ? getOrderData.data.resultObject.id
          : "0000", // Replace with Order ID generated in Step 4
        method: "netbanking",
        bank: this.state.banktype,
      };
      razorpay.createPayment(data);

      razorpay.on("payment.success", function (resp: any) {
        console.log("resp", resp);
        const obj = {
          userID: user.userID,
          couponID: _this.state.couponid ? _this.state.couponid : 0,
          addressID: _this.state.mainaddress ? _this.state.mainaddress : 0,
          paymentMethod: "NetBanking",
          paymentStatus: "Success",
          distance: 0,
          totalQty: _this.state.cartarray ? _this.state.cartarray.length : 0,
          totalAmount: parseInt(_this.state.totalpay),
          discountAmount: _this.state.discount
            ? parseInt(_this.state.discount)
            : 0,
          taxAmount: 0,
          deliveryAmount: 0,
          razorpayPaymentID: resp.razorpay_payment_id,
          razorpayOrderID: resp.razorpay_order_id,
          razorpaySignature: resp.razorpay_signature,
          orderDetails: order
        };
        _this.props.createOrder(obj);
      }); // will pass payment ID, order ID, and Razorpay signature to success handler.

      razorpay.on("payment.error", function (resp: any) {
        alert(resp.error.description);
      }); // will pass error object to error handler
    }
  }
  }

  /** Net banking block */
  netBankingBlock() {
    return (
      <div className="adrss-1 net-banking">
        <label className="rdio-box1">
          <input
            type="radio"
            id="4"
            checked={this.state.paymenttype === 4 ? true : false}
            onChange={this.changePaymentUPI}
            name="payment"
          />
          <span className="checkmark"></span>
        </label>
        <div className="upi-payment">
          <div className="tt-line">
            <img src={placeorder.net} alt="" />
            <span className="tt-radio">Net Banking</span>
          </div>
          {this.state.paymenttype === 4 ? (
            <div className="pey-upi">
              <span className="b-tt">Popular Banks</span>
              <div className="opti1 opti2">
                <label className="rdio-box1">
                  <span className="tt-radio">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRUQyMzJBIiBkPSJNMCAwaDI2djI2SDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNC42IDQuNmgxNi44djE2LjhINC42Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExLjcgMGgyLjZ2MjZoLTIuNiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0wIDExLjdoMjZ2Mi42SDAiLz48cGF0aCBmaWxsPSIjMDA0QzhGIiBkPSJNOSA5aDh2OEg5Ii8+PC9nPjwvc3ZnPg=="
                      className="_2PKwvL"
                    />
                    HDFC Bank
                  </span>
                  <input
                    type="radio"
                    id="HDFC"
                    checked={this.state.banktype === "HDFC" ? true : false}
                    onChange={this.changeBankType}
                    name="bank"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="rdio-box1">
                  <span className="tt-radio">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctNmg0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjRjk5RDI3IiBkPSJNNy41IDZjNi4zLTYuMiAxNC04IDE3LTMuNiAzIDQuMy40IDEzLTYgMTkuMi02LjIgNi4zLTE0IDgtMTcgMy42LTMtNC4zLS4zLTEzIDYtMTkuMiIvPjxwYXRoIGZpbGw9IiNCMDJBMzAiIGQ9Ik0xMS43IDIuN2MtLjcuNS0xLjQgMS0yIDEuOC01LjYgNS41LTggMTMtNS4yIDE2LjcgMi44IDMuOCA5LjYgMi40IDE1LjMtMyAzLTMgNS02LjUgNi05LjcgMC0yLjQtLjItNC41LTEuMy02QzIyLTEgMTctLjUgMTEuNyAyLjUiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTkuMyAyLjVjLjcuNy4zIDIuNC0xIDMuNi0xLjMgMS43LTMgMi0zLjYgMS0uOC0uMy0uMy0yIDEtMy4yIDEuMi0xLjMgMy0xLjcgMy42LTF6bS00LjUgMjIuMmMtMyAyLjItNiAzLjMtOSAzIDEuMyAwIDIuMy0xLjQgMy0zLjMgMS0yIDEuNS0zLjcgMi01LjQuNS0yLjYuNS00LjUuMi01LS41LS42LTEuNy0uNC0zIC40LS42LjMtMS40IDAtLjQtMSAxLTEuMyA1LTQuMiA2LjMtNC42IDEuMi0uNSAzIDAgMi4zIDEuOC0uNCAxLjMtNS44IDE1LjYtMS44IDE0eiIvPjwvZz48L3N2Zz4="
                      className="_2PKwvL"
                    />
                    ICICI Bank
                  </span>
                  <input
                    type="radio"
                    id="ICIC"
                    checked={this.state.banktype === "ICIC" ? true : false}
                    onChange={this.changeBankType}
                    name="bank"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="rdio-box1">
                  <span className="tt-radio">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTctN2g0MHY0MEgtN3oiLz48cGF0aCBmaWxsPSIjMTZEIiBkPSJNMTIuNiAyN0M1LjQgMjYuNS0uMiAyMC40IDAgMTMgLjIgNiA2LjIgMCAxMy41IDBTMjYuOCA1LjggMjcgMTNjLjIgNy40LTUuNCAxMy41LTEyLjYgMTRWMTZjMS0uNSAxLjctMS42IDEuNS0yLjgtLjQtMS4yLTEuNC0yLTIuNi0ycy0yLjIuOC0yLjQgMmMwIDEuMi41IDIuMyAxLjYgMi43Ii8+PC9nPjwvc3ZnPg=="
                      className="_2PKwvL"
                    />
                    State Bank of India
                  </span>
                  <input
                    type="radio"
                    id="SBIN"
                    checked={this.state.banktype === "SBIN" ? true : false}
                    onChange={this.changeBankType}
                    name="bank"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="rdio-box1">
                  <span className="tt-radio">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMjggMEgwdjIzLjhoMjhWMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBmaWxsPSIjMDAzODc0IiBkPSJNMCAxMkMwIDUuMiA2LjMgMCAxNCAwczE0IDUuMyAxNCAxMmMwIDYuNS02LjMgMTEuOC0xNCAxMS44cy0xNC01LjMtMTQtMTIiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRUQxQzI0IiBkPSJNMTIuMyAzLjhsMy4yLTFWMjBsLTMuMiAxLjIiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuMiAxNC43QzEyLjggMTYuMyAxMS40IDE4IDkgMThjLTMuNyAwLTUuNC0zLjQtNS40LTYuMyAwLTIuOCAxLjMtNiA0LjgtNiAxLjUgMCAzIDEgNCAyVjEwYy0xLS43LTIuNS0xLTMuNi0xLTIuMiAwLTQuMi43LTQgMyAwIDEuNCAxLjQgMi40IDMgMi40IDIuMiAwIDMuNi0yIDQuNy0zLjZMMTQgOWMxLTEuNiAyLjYtMy4yIDUtMy4yIDMgMCA0LjcgMi40IDUuMiA1SDIzYy0uNS0xLTEuNS0xLjQtMi42LTEuNC0yLjMgMC0zLjggMi01IDMuN2wtMS4yIDJ6TTI0LjUgMTNjLS4zIDIuNi0xLjcgNS00LjggNS0xLjggMC0zLjItMS00LjItMi42di0xLjdjMS4zLjYgMi40IDEuMiAzLjggMS4yIDEuNyAwIDMuMi0xIDMuOC0yaDJ6IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjwvc3ZnPg=="
                      className="_2PKwvL"
                    />
                    Kotak Bank
                  </span>
                  <input
                    type="radio"
                    id="KKBK"
                    checked={this.state.banktype === "KKBK" ? true : false}
                    onChange={this.changeBankType}
                    name="bank"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="select-bank">
                <span className="b-tt">Other Banks</span>
                <select className="_1CV081" onChange={this.selectBank} value={this.state.banktype ? this.state.banktype : ''}>
                  <option value="SELECT_BANK">---Select Bank---</option>
                  {this.state.bankarray
                    ? this.state.bankarray.map((data: any, index: number) => (
                        <option key={index} value={data.key}>
                          {data.value}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="text-danger">
                          {this.state.banktypeerror}
                        </div>
              <button className="continue-btn" onClick={this.payWithNetBanking}>
                PAY
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  /** Razerpay functionality */
  openCheckout() {
    var razorpay = new Razorpay({
      key: "rzp_live_5dM1OK63yl61hL",
    });
    let _this = this;
    razorpay.once("ready", function (response: any) {
      console.log(response.methods);
      var output = Object.entries(
        response.methods.netbanking
      ).map(([key, value]) => ({ key, value }));
      _this.setState({
        upiTrue: response.methods.upi,
        cardTrue: response.methods.card,
        netbankingTrue: true,
        walletTrue: true,
        freecharge: response.methods.wallet.freecharge,
        olamoney: response.methods.wallet.olamoney,
        payzapp: response.methods.wallet.payzapp,
        AMEX: response.methods.card_networks.AMEX  ? "AMERICAN-EXPRESS" : "",
        BAJAJ: response.methods.card_networks.BAJAJ ? "BAJAJ" : "",
        DICL: response.methods.card_networks.DICL === 1 ? "DICL" : "",
        JCB: response.methods.card_networks.JCB === 1 ? "JCB" : "",
        MAES: response.methods.card_networks.MAES === 1 ? "MAESTRO" : "",
        MC: response.methods.card_networks.MC === 1 ? "MASTERCARD" : "",
        RUPAY: response.methods.card_networks.RUPAY === 1 ? "RUPAY" : "",
        VISA: response.methods.card_networks.VISA === 1 ? "VISA" : "",
        bankarray: output,
      });
    });
  }

  /** Razerpay Block */
  rezarpay() {
    return (
      <div className="adrss-1">
        <label className="rdio-box1">
          <input
            type="radio"
            id="5"
            checked={this.state.paymenttype === 5 ? true : false}
            onChange={this.changePaymentUPI}
            name="payment"
          />
          <span className="checkmark"></span>
        </label>

        <div className="upi-payment">
          <div className="tt-line">
            <img src={placeorder.wallet} alt="" />
            <span className="tt-radio">Razer-Pay</span>
          </div>
          {this.state.paymenttype === 5 ? (
            <div className="pey-upi">
              <div className="opti1 opti2">
                <label className="rdio-box1">
                  <span className="tt-radio">Razer-pay</span>
                  <input
                    type="radio"
                    checked={true}
                    onChange={this.change}
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="box-input1">
                  <div className="form-group">
                    <span className="verfy-tt">Amount</span>
                    <input
                      type="number"
                      id="from"
                      name="amount"
                      onChange={this.onChangeEvent}
                      className="form-control"
                      required
                    />
                    <label className="form-control-placeholder" htmlFor="from">
                      Enter Amount
                    </label>
                  </div>
                  <div className="text-danger">{this.state.amounterror}</div>
                  <button className="continue-btn" onClick={this.openCheckout}>
                    PAY WITH RAZER-PAY
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  openApplyModel() {
    var newData1: any = this.state.cartarray
      ? this.state.cartarray.reduce(
          (sum: number, i: any) => (sum += i.sellingPrice),
          0
        )
      : 0;
    this.setState({
      openModel: !this.state.openModel,
      couponapplieddata: "",
      couponShow: (this.state.couponShow = false),
      couponid: 0,
      discount: (this.state.discount = "0"),
      totalpay: newData1.toFixed(2),
      isShowApplied: false,
    });
  }

  handleCloseModel() {
    this.setState({
      openModel: !this.state.openModel,
    });
  }

  couponApply(data: any) {
    let coupondata: any = data;
    console.log("data", coupondata);
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);

    const obj = {
      Code: data.couponCode,
      UserID: user.userID,
    };
    this.props.applyCoupon(obj);
  }

  getCouponApply() {
    this.setState({
      couponapplieddata: "",
      couponShow: (this.state.couponShow = false),
      couponid: 0,
    });
    // const users: any = localStorage.getItem("user");
    // let user = JSON.parse(users);
    // const obj = {
    //   userID: user.userID,
    // };
    // this.props.getApplyList(obj);
  }

  removeCoupon(data: any) {
    var newData: any = this.state.cartarray
      ? this.state.cartarray.reduce(
          (sum: number, i: any) => (sum += i.sellingPrice),
          0
        )
      : 0;
    this.setState({
      couponapplieddata: "",
      couponShow: (this.state.couponShow = false),
      couponid: 0,
      discount: (this.state.discount = "0"),
      totalpay: newData.toFixed(2),
    });
  }

  applyCoupon() {
    if (this.state.codename) {
      this.setState({
        couponerror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);

      const obj = {
        Code: this.state.codename.toUpperCase(),
        UserID: user.userID,
      };
      this.props.applyCoupon(obj);
    } else {
      this.setState({
        couponerror: "Please enter valid coupon code",
      });
    }
  }

  notapply(data: any) {
    this.setState({
      couponapplieddata: (this.state.couponapplieddata = data),
      openModel: (this.state.openModel = false),
      couponShow: (this.state.couponShow = true),
      isShowApplied: (this.state.isShowApplied = true),
    });
  }

  /** Card item block */
  cardItemsBlock() {
    var coupon: any = this.state.couponapplieddata;
    var maxtotal: any = this.state.cartarray
      ? this.state.cartarray.reduce(
          (sum: number, i: any) => (sum += i.sellingPrice),
          0
        )
      : 0;
    return (
      <div className="right-box order">
        <div className="pay-box">
          <div className="your-card">
            <h3>Your Cart ({localStorage.getItem("cartcount")} Items)</h3>
            <hr />
          </div>
          <div className="market-name">
            {/* From <a href="#">Bhatia Super Market</a> */}
          </div>
          {this.state.cartarray
            ? this.state.cartarray.length > 0 &&
              this.state.cartarray.map((cartdata: any, index: any) => (
                <div className="flex-box" key={index} style={{
                  pointerEvents: this.state.qtydisable === true ? "none" : "visible",
                }}>
                  <div className="bdr-roud"></div>
                  <div className="item-title ">
                    <h4>{cartdata.productName}</h4>
                    {/* <span className="pak">Pack of 20</span> */}
                  </div>
                  <div className="number">
                    <span
                      className="minus"
                      onClick={() => this.decrementQty(cartdata)}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      name="qty"
                      value={cartdata.quantity ? cartdata.quantity : ""}
                      onChange={(e: any) => this.onChangeEvent(e)}
                      disabled={this.state.qtydisable === true ? true : false}
                    />
                    <span
                      className="plus"
                      onClick={() => this.incrementQty(cartdata)}
                    >
                      +
                    </span>
                  </div>
                  <span className="price">
                    <i className="fa fa-rupee"></i> {cartdata.sellingPrice}
                  </span>
                </div>
              ))
            : ""}
        </div>
        {this.state.cartarray && this.state.cartarray.length > 0 ? (
          <div className="pay-box">
            <div className="your-card">
              <h3>Apply Coupon</h3>
              <hr />
            </div>

            <div className="apply-c">
              {this.state.couponShow === false ? (
                <button className="cccc-btn" onClick={this.openApplyModel}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.003 512.003"
                    xmlSpace="preserve"
                    fill="#F7B62B"
                    height="15px"
                    width="15px"
                    style={{ marginRight: "15px" }}
                  >
                    <g>
                      <g>
                        <path d="M477.958,262.633c-2.06-4.215-2.06-9.049,0-13.263l19.096-39.065c10.632-21.751,2.208-47.676-19.178-59.023l-38.41-20.38 c-4.144-2.198-6.985-6.11-7.796-10.729l-7.512-42.829c-4.183-23.846-26.241-39.87-50.208-36.479l-43.053,6.09 c-4.647,0.656-9.242-0.838-12.613-4.099l-31.251-30.232c-17.401-16.834-44.661-16.835-62.061,0L193.72,42.859 c-3.372,3.262-7.967,4.753-12.613,4.099l-43.053-6.09c-23.975-3.393-46.025,12.633-50.208,36.479l-7.512,42.827 c-0.811,4.62-3.652,8.531-7.795,10.73l-38.41,20.38c-21.386,11.346-29.81,37.273-19.178,59.024l19.095,39.064 c2.06,4.215,2.06,9.049,0,13.263l-19.096,39.064c-10.632,21.751-2.208,47.676,19.178,59.023l38.41,20.38 c4.144,2.198,6.985,6.11,7.796,10.729l7.512,42.829c3.808,21.708,22.422,36.932,43.815,36.93c2.107,0,4.245-0.148,6.394-0.452 l43.053-6.09c4.643-0.659,9.241,0.838,12.613,4.099l31.251,30.232c8.702,8.418,19.864,12.626,31.03,12.625 c11.163-0.001,22.332-4.209,31.03-12.625l31.252-30.232c3.372-3.261,7.968-4.751,12.613-4.099l43.053,6.09 c23.978,3.392,46.025-12.633,50.208-36.479l7.513-42.827c0.811-4.62,3.652-8.531,7.795-10.73l38.41-20.38 c21.386-11.346,29.81-37.273,19.178-59.024L477.958,262.633z M196.941,123.116c29.852,0,54.139,24.287,54.139,54.139 s-24.287,54.139-54.139,54.139s-54.139-24.287-54.139-54.139S167.089,123.116,196.941,123.116z M168.997,363.886 c-2.883,2.883-6.662,4.325-10.44,4.325s-7.558-1.441-10.44-4.325c-5.766-5.766-5.766-15.115,0-20.881l194.889-194.889 c5.765-5.766,15.115-5.766,20.881,0c5.766,5.766,5.766,15.115,0,20.881L168.997,363.886z M315.061,388.888 c-29.852,0-54.139-24.287-54.139-54.139s24.287-54.139,54.139-54.139c29.852,0,54.139,24.287,54.139,54.139 S344.913,388.888,315.061,388.888z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M315.061,310.141c-13.569,0-24.609,11.039-24.609,24.608s11.039,24.608,24.609,24.608 c13.569,0,24.608-11.039,24.608-24.608S328.63,310.141,315.061,310.141z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M196.941,152.646c-13.569,0-24.608,11.039-24.608,24.608c0,13.569,11.039,24.609,24.608,24.609 c13.569,0,24.609-11.039,24.609-24.609C221.549,163.686,210.51,152.646,196.941,152.646z" />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  Apply Coupon
                </button>
              ) : this.state.isShowApplied === false ? (
                <div className="offer-applied">
                  <div className="offer-applied-main-flex">
                    <div className="coupon-code">
                      <div className="code-1">{coupon.couponCode}</div>
                      <div className="offer-small-text">
                        Offers applied on the bill
                      </div>
                    </div>
                    <button
                      className="remove-coupon"
                      onClick={() => this.removeCoupon(coupon)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <div className="offer-applied">
                  <div className="offer-applied-main-flex">
                    <div className="coupon-code">
                      <div className="code-1" style={{ color: "red" }}>
                        Promo Code is Invalid
                      </div>
                      <div className="offer-small-text">
                        Oops! Add More items to apply this promo.
                      </div>
                    </div>
                    <button className="notapply" onClick={this.openApplyModel}>
                      Try Again
                    </button>
                  </div>
                </div>
              )}
              <Modal
                className="modal-dialog-centered coupon"
                show={this.state.openModel}
                onHide={this.handleCloseModel}
              >
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <section className="view-order-dtl">
                    <div className="fix-width">
                      <div className="top-title">
                        <h1 className="order-id">Available Coupons </h1>
                      </div>
                      <div className="src-coupon-code">
                        <div className="serch-coupon-box">
                          <input
                            type="text"
                            id="coupon"
                            name="codename"
                            className="form-control"
                            onChange={this.onChangeEvent}
                            placeholder="Enter coupon code"
                          />
                          <button
                            className="apply-code"
                            onClick={this.applyCoupon}
                          >
                            Apply
                          </button>
                        </div>
                        <div className="text-danger">
                          {this.state.couponerror}
                        </div>
                      </div>
                      <div className="coupon-box">
                        {this.state.coupondetails
                          ? this.state.coupondetails.map(
                              (data: any, index: number) => (
                                <div className="box" key={index}>
                                  <div className="coupon-code">
                                    {data.couponCode}
                                  </div>
                                  <h4 className="off-price">
                                    Get{" "}
                                    {(
                                      ((data.minAmountOrder -
                                        data.sellingPrice) /
                                        data.minAmountOrder) *
                                      100
                                    ).toFixed(2)}
                                    % Off
                                  </h4>
                                  <span className="text-1">
                                    Use code {data.couponCode} & get{" "}
                                    {(
                                      ((data.minAmountOrder -
                                        data.sellingPrice) /
                                        data.minAmountOrder) *
                                      100
                                    ).toFixed(2)}
                                    % off on orders above R{data.minAmountOrder}{" "}
                                    Maximum discount: {data.sellingPrice}.
                                  </span>
                                  {/* <div className="also-get">
                          <span className="list-tt">Also get.</span>
                          <ul className="">
                            <li>
                              <div className="off-title">
                                Extra R30 cashback with PhonePe
                              </div>
                              <div className="off-text">
                                Pay with PhonePe Wallet to get an additional
                                cashback of R30 in your PhanePe Wallet
                              </div>
                            </li>
                            <li>
                              <div className="off-title">
                                Extra R30 cashback with PhonePe
                              </div>
                              <div className="off-text">
                                Pay with PhonePe Wallet to get an additional
                                cashback of R30 in your PhanePe Wallet
                              </div>
                            </li>
                          </ul>
                        </div> */}
                                  {data.minAmountOrder > maxtotal ? (
                                    <button
                                      className="apply-btn mt-3"
                                      onClick={() => this.notapply(data)}
                                    >
                                      Apply Coupon
                                    </button>
                                  ) : (
                                    <button
                                      className="apply-btn mt-3"
                                      onClick={() => this.couponApply(data)}
                                    >
                                      Apply Coupon
                                    </button>
                                  )}
                                </div>
                              )
                            )
                          : ""}
                      </div>
                    </div>
                  </section>
                </Modal.Body>
                <Modal.Footer>
                  <div className="col-md-12">
                    <div className="deliver">
                      <button
                        type="button"
                        className="btb-text"
                        onClick={this.handleCloseModel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal.Footer>
              </Modal>
            </div>
            {/* {
            this.state.coupondetails ? (
              this.state.coupondetails.map((data:any,index:number) => (
                <div>
                  <p>{data.couponCode}</p>
                </div> 
              ))
            ) : ('')
          } */}
          </div>
        ) : (
          ""
        )}
        <div className="pay-box">
          <div className="flex-box flex-box2">
            <img src="images/edd-note.svg" alt="" />
            <textarea
              value="Any instructions for the delivery partner?"
              onChange={this.change}
            >
              Any instructions for the delivery partner?
            </textarea>
          </div>
        </div>
        <div className="pay-box">
          <div className="your-card">
            <h3>Invoice</h3>
            <hr />
            <span className="bt-tt-signin">
              • Delivery charges may change after signing in{" "}
            </span>
          </div>
          <div className="invoice-box">
            <div className="tilte">Item total price</div>
            <div className="price">
              <i className="fa fa-rupee" aria-hidden="true"></i>{" "}
              {this.state.cartarray
                ? this.state.cartarray.reduce(
                    (sum: number, i: any) => (sum += i.sellingPrice),
                    0
                  ).toFixed(2)
                : 0}
            </div>
          </div>
          {/* <div className="invoice-box">
            <div className="tilte">Item total</div>
            <div className="price free">Free</div>
          </div> */}
          <div className="invoice-box">
            <div className="tilte">Item discount</div>
            <div className="price free">{this.state.discount}</div>
          </div>
          <div className="invoice-box total-pay ">
            <div className="tilte">To pay</div>
            <div className="price">
              <i className="fa fa-rupee" aria-hidden="true"></i>{" "}
              {this.state.totalpay}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /** If change login */
  async changeLogin(text: any, btext: any) {
    if (await alertMessage(text, btext)) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      localStorage.removeItem("cartcount");
      localStorage.removeItem("adminToken");
      localStorage.removeItem("merchantID");
      this.props.history.push("/signin");
    }
  }

  /** Get Coupon List */
  getCouponList(searchText: string = "", page: number = 1, size: number = 20) {
    const obj: any = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
    };
    this.props.getCouponData(obj);
  }
  /** Render DOM */
  render() {
    return (
      <>
        <header className="header">
          <div className="container-fluid">
            <div className="dis-flx">
              <div className="left-content">
                <Link to="/">
                  <img src={header.logo} alt="logo" />
                </Link>
                {/* <!-- <a href="#">
                        <div className="search-box">
                            <img src="images/location.svg" alt="location" />
                            <span className="search-text"> Pretoria</span>
                        </div>
                    </a> --> */}
              </div>
              <div className="right-content">
                <div className="cart-icon">
                  <div className="quty-icon">
                    {localStorage.getItem("cartcount")
                      ? localStorage.getItem("cartcount")
                      : 0}
                  </div>
                  <Link to="/cart">
                    <img src={trackorder.shopping} alt="cart-icon" />
                  </Link>
                </div>

                {localStorage.getItem("token") ? (
                  <div className="cart-icon m-0">
                    <Link className="cart-icon" to="/profile">
                      <i className="fas fa-user-circle user_icon1"></i>
                    </Link>
                  </div>
                ) : (
                  <Link className="sign-tt" to="/signin">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
        <section className="place-order">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="main-flex">
                  <div className="left-box l">
                    <div className="pro-box1 login-box">
                      <div className="dis-box">
                        <div className="dis-left">
                          <div className="tt-1">
                            <span className="numbr">1</span>
                            <h2 className="tt-l">LOGIN</h2>
                          </div>
                          <div className="nm-info  show-1">
                            <p>
                              <span className="b-tt">
                                {this.state.firstName} {this.state.firstName}
                              </span>{" "}
                              {this.state.usermobile}
                            </p>
                          </div>
                          <div className="nm-info  hidediv-1">
                            <div className="dis-f1">
                              <div className="tt-left">
                                <p>
                                  Name{" "}
                                  <span className="b-tt">
                                    {this.state.firstName}
                                  </span>
                                </p>
                                <p>
                                  Email{" "}
                                  <span className="b-tt">
                                    jayvir009@gmail.com
                                  </span>
                                </p>
                                <a href="#" className="logout-tt">
                                  Logout & Siggn in to another account
                                </a>
                                <a href="#" className="chk-outbtn">
                                  CONTINUE CHECKOUT
                                </a>
                              </div>
                              <div className="tt-right">
                                <p>Advantages of our secure login</p>
                                <ul>
                                  <li>
                                    <svg
                                      className="icon-tt"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g fill="#F7B62B" fillRule="evenodd">
                                        <path d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z"></path>
                                      </g>
                                    </svg>
                                    Easily Track Orders, Hassle free Returns
                                  </li>
                                  <li>
                                    <svg
                                      className="icon-tt"
                                      width="18"
                                      height="18"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g fill="#F7B62B" fillRule="evenodd">
                                        <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"></path>
                                      </g>
                                    </svg>
                                    Get Relevant Alerts and Recommendation
                                  </li>
                                  <li>
                                    <span className="icon-tt">★</span>Wishlist,
                                    Reviews, Ratings and more.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <span className="small-tt">
                              Please note that upon clicking "Logout" you will
                              lose all items in cart and will be redirected to
                              Flipkart home page.
                            </span>
                          </div>
                        </div>
                        <div className="dis-right">
                          <button
                            className="change1"
                            onClick={() =>
                              this.changeLogin(
                                "You should be login into another account?",
                                "Yes, change it"
                              )
                            }
                          >
                            CHANGE
                          </button>
                        </div>
                      </div>
                    </div>

                    {/** Add Address form block */}
                    {this.addressBlock()}

                    {this.state.mainaddress ? (
                      <div className="pro-box1 paymt-opton">
                        <div className="dis-box">
                          <div className="dis-left">
                            <div className="tt-1">
                              <span className="numbr">3</span>
                              <h2 className="tt-l">Payment Options</h2>
                            </div>
                            <div className="nm-info  hidediv-1">
                              {/** UPI PAYMENT SECTION */}
                              {this.state.upiTrue === true
                                ? this.UPIBlock()
                                : null}

                              {/* <!-- wallet --> */}
                              {this.state.walletTrue === true
                                ? this.walletBlock()
                                : null}

                              {/* <!-- Credit / Debit / ATM Card --> */}
                              {this.state.cardTrue === true
                                ? this.cardBlock()
                                : null}

                              {/* <!-- Net Banking --> */}
                              {this.state.netbankingTrue === true
                                ? this.netBankingBlock()
                                : null}

                              {/* <!-- RazerPay --> */}
                              {/* {this.rezarpay()} */}
                            </div>
                          </div>
                          {/* <div className="dis-right">
                            <button className="change1">CHANGE</button>
                          </div> */}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {/** Card Item Block */}
                  {this.cardItemsBlock()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

/**
 *
 * @param state : api call response update state
 */
const mapStateToProps = (state: any) => ({
  addressDetails: state.placeOrder.addressdata,
  getCartDetail: state.product.getcartdetails,
  getaddressDetail: state.placeOrder.getaddressdata,
  getCardDetail: state.placeOrder.getcarddata,
  getCouponDetail: state.order.coupondata,
  applycoupon: state.placeOrder.applycoupon,
  getApplyCouponData: state.placeOrder.getcouponapply,
  removeCouponData: state.placeOrder.removecoupon,
  orderDetail:state.placeOrder.orderdata,
  updateCart: state.product.updatecart,
  updateaddress:state.placeOrder.updateaddress,
  addaddress:state.placeOrder.addaddress,
  deletedata:state.placeOrder.deletedata,
  addcard:state.placeOrder.addcard,
  deletecard:state.placeOrder.deletecard
});

/**
 *
 * @param dispatch : call api with action
 */
const mapDispatchToProps = (dispatch: any) => ({
  /** Get Address List */
  getAddressList: (data: any) =>
    dispatch(placeOrderService.getAddressList(data)),

  /** Add Address */
  addAddress: (data: any) => dispatch(placeOrderService.addAddress(data)),

  /** Get cart data */
  getcartData: (data: any) => dispatch(productService.getcartData(data)),

  /** Update cart */
  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),

  /** Update Address */
  updateAddress: (data: any) => dispatch(placeOrderService.updateAddress(data)),

  /** Delete Address */
  deleteAddress: (data: any) => dispatch(placeOrderService.deleteAddress(data)),

  /** Add Card */
  addCard: (data: any) => dispatch(placeOrderService.addCard(data)),

  /** Get card */
  getcard: (data: any) => dispatch(placeOrderService.getcard(data)),

  /** Update Card */
  updateCard: (data: any) => dispatch(placeOrderService.updateCard(data)),

  /** Delete card */
  deleteCard: (data: any) => dispatch(placeOrderService.deleteCard(data)),

  /** Create Order */
  createOrder: (data: any) => dispatch(placeOrderService.createOrder(data)),

  /** Get CouponList */
  getCouponData: (data: any) => dispatch(placeOrderService.getCouponData(data)),

  /** Get CouponList */
  applyCoupon: (data: any) => dispatch(placeOrderService.applyCoupon(data)),

  /** Get CouponList */
  getApplyList: (data: any) => dispatch(placeOrderService.getApplyList(data)),

  /** Get CouponList */
  removeCoupon: (data: any) => dispatch(placeOrderService.removeCoupon(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
