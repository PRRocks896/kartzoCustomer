import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import { addAddressRequest, addCartRequest, getAddressListRequest, getCartListRequest, placeorderStateRequest } from "../../modelController";
import {
  header,
  trackorder,
  placeorder,
} from "../../pages/components/helper/images";
import constant from "../constant/constant";
import { getAppName, alertMessage } from "../utils";
import { connect } from "react-redux";
import "./placeorder.css";
import { placeOrderService, productService } from "../../redux/actions";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

class PlaceOrder extends React.Component<{
  show: boolean;
  getAddressList: any;
  addAddress: any;
  getcartData: any;
  updateToCart: any;
  history: any;
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
    // cvc: "",
    // expiry: "",
    // focus: "",
    // name1: "",
    // number: "",
  };

  constructor(props: any) {
    super(props);
    this.change = this.change.bind(this);
    this.showSection = this.showSection.bind(this);
    this.changePaymentUPI = this.changePaymentUPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  }

  componentDidMount() {
    document.title = constant.placeorder + getAppName();
    EventEmitter.dispatch("isShow", true);
    EventEmitter.dispatch("isShowFooter", true);
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    this.setState({
      usermobile: user.phone,
      firstname: user.firstName,
      lastname: user.lastName,
      mobile: user.phone,
    });
    this.getAddressDetails();
    if (localStorage.getItem("token")) {
      this.getCartData();
    }
  }

  getCartData(searchText: string = "", page: number = 1, size: number = 20) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : getCartListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getcartData(obj);
  }

  change(e: any) {
    console.log("e", e.target.checked);
    this.setState({
      checkedvalue: !this.state.checkedvalue,
    });
  }

  showSection() {
    this.setState({
      showSection: true,
    });
  }

  changePaymentUPI(e: any) {
    this.setState({
      paymenttype: this.state.paymenttype = parseInt(e.target.id),
    });
  }

  handleChange() {}

  getAddressDetails(
    searchText: string = "",
    page: number = 1,
    size: number = 20
  ) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : getAddressListRequest = {
      searchText: searchText,
      isActive: true,
      page: page,
      size: size,
      userId: user.userID,
    };
    this.props.getAddressList(obj);
  }

  changeAddress(e: any) {
    this.setState({
      addresstype: this.state.addresstype = parseInt(e.target.id),
    });
  }

  changePhonePay(e: any) {
    this.setState({
      paytype: this.state.paytype = parseInt(e.target.id),
    });
  }

  changeBankType(e: any) {
    this.setState({
      banktype: this.state.banktype = parseInt(e.target.id),
    });
    console.log("banktype", this.state.banktype);
  }

  selectBank(e: any) {
    this.setState({
      banktype: this.state.banktype = parseInt(e.target.value),
    });
    console.log("banktype", this.state.banktype);
  }

  componentWillReceiveProps(nextProps: any, newState: any) {
    console.log("props", nextProps);
    if (nextProps.getCartDetail) {
      this.getCartAllProductData(nextProps.getCartDetail);
    }
  }

  onChangeEvent(event: any, index: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  getCartAllProductData(data: any) {
    this.setState({
      cartarray: this.state.cartarray = data.data,
    });
    localStorage.setItem("cartcount", data.totalcount);
    if (this.state.cartarray && this.state.cartarray.length > 0) {
      this.setState({
        cartarray: this.state.cartarray = data.data,
      });
    }
    console.log("cartarray", this.state.cartarray);
  }

  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      this.getAddress(this.state.lat, this.state.long);
    });
  }

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
            console.log("address", address);
            if (address && address.address_components.length > 0) {
              _this.setState({
                area: address.address_components[1].long_name
                  .toString()
                  .toLowerCase(),
                city: address.address_components[2].long_name
                  .toString()
                  .toLowerCase(),
                state: address.address_components[3].long_name
                  .toString()
                  .toLowerCase(),
                country: address.address_components[4].long_name
                  .toString()
                  .toLowerCase(),
                pincode: address.address_components[5].long_name,
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

  addressChange(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

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

  incrementQty(data: any) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity + 1,
      discountApplied: data.discountApplied,
    };
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
  }

  decrementQty(data: any) {
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    const obj : addCartRequest = {
      userID: user.userID,
      productID: data.productID,
      quantity: data.quantity - 1,
      discountApplied: data.discountApplied,
    };
    this.props.updateToCart(obj, data.orderCartID);
    setTimeout(() => {
      this.getCartData();
    }, 200);
  }

  addAddress() {
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
      const obj : addAddressRequest = {
        userID: user.userID,
        name: this.state.name,
        mobile: this.state.mobile,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pincode: this.state.pincode,
        landmark: this.state.landmark,
        addressType: this.state.addresstype,
      };
      // this.props.addAddress(obj);
    }
  }

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
                <div className="adrss-1">
                  <div className="edit-adres">EDIT</div>
                  <label className="rdio-box1">
                    <span className="b-tt">Rayjada Jayvir</span>{" "}
                    <span className="add-type">HOME</span>{" "}
                    <span className="b-tt">9726883005</span>
                    <span className="adress-rdio">
                      shreerangnagar block no 59 , nanamava road, opp om
                      residansy rajkot, Rajkot, Gujarat
                      <span className="b-tt"> - 360005</span>
                    </span>
                    <input
                      type="radio"
                      id="1"
                      className="form-control"
                      checked={this.state.checkedvalue === true ? true : false}
                      onChange={this.change}
                      name="address"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <a href="#" className="chk-outbtn">
                    CONTINUE CHECKOUT
                  </a>
                </div>
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
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from"
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
                            value={
                              this.state.usermobile ? this.state.usermobile : ""
                            }
                            className="form-control"
                            onChange={this.addressChange}
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from"
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
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from"
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
                            onChange={this.addressChange}
                            className="form-control"
                            required
                          />
                          <label
                            className="form-control-placeholder"
                            htmlFor="from"
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
                            htmlFor="from"
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
                            htmlFor="from"
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
                            htmlFor="from"
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
                            htmlFor="from"
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
                                    this.state.addresstype === 1 ? true : false
                                  }
                                  onChange={this.changeAddress}
                                  name="radio"
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
                                    this.state.addresstype === 2 ? true : false
                                  }
                                  onChange={this.changeAddress}
                                  name="radio"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="save-delivry"
                          onClick={this.addAddress}
                        >
                          Save and Deliver Here
                        </button>
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
              <span className="b-tt">Choose an option</span>
              <div className="opti1">
                <label className="rdio-box1">
                  <span className="tt-radio">PhonePe</span>
                  <input
                    type="radio"
                    id="1"
                    checked={this.state.paytype === 1 ? true : false}
                    onChange={this.changePhonePay}
                    name="phonepay"
                  />
                  <span className="checkmark"></span>
                </label>
                {this.state.paytype === 1 ? (
                  <button className="continue-btn">CONTINUE</button>
                ) : (
                  ""
                )}
              </div>

              <div className="opti1 opti2">
                <label className="rdio-box1">
                  <span className="tt-radio">Your UPI ID</span>
                  <input
                    type="radio"
                    id="2"
                    checked={this.state.paytype === 2 ? true : false}
                    onChange={this.changePhonePay}
                    name="phonepay"
                  />
                  <span className="checkmark"></span>
                </label>
                {this.state.paytype === 2 ? (
                  <div className="box-input1">
                    <div className="form-group">
                      <span className="verfy-tt">VERIFY</span>
                      <input
                        type="text"
                        id="from"
                        className="form-control"
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        htmlFor="from"
                      >
                        Enter UPI ID
                      </label>
                    </div>
                    <button className="continue-btn">PAY R400</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

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
            <img src={placeorder.paytm} alt="" />
            <span className="tt-radio">Wallets</span>
          </div>
          {this.state.paymenttype === 2 ? (
            <div className="pey-upi">
              <div className="opti1 opti2">
                <label className="rdio-box1">
                  <span className="tt-radio">Paytm</span>
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
                    <span className="verfy-tt">Link Now</span>
                    <input
                      type="text"
                      id="from"
                      className="form-control"
                      required
                    />
                    <label className="form-control-placeholder" htmlFor="from">
                      Enter Paytm linked no.
                    </label>
                  </div>
                  <button className="continue-btn">PAY R400</button>
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

  cardBlock() {
    return (
      <div className="adrss-1 pay-credit">
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
            <img src={placeorder.paytm} alt="" />
            <span className="tt-radio">Credit / Debit / ATM Card</span>
          </div>
          {this.state.paymenttype === 3 ? (
            <div className="pey-upi">
              <div className="opti1 opti2">
                <div className="box-input1">
                  <div className="form-group card-nombr">
                    <span className="verfy-tt">Link Now</span>
                    <input
                      type="text"
                      id="from"
                      className="form-control"
                      required
                    />
                    <label className="form-control-placeholder" htmlFor="from">
                      Enter Card Number
                    </label>
                  </div>
                  <div className="flex-input">
                    <div className="valid-date">
                      <span className="vilid-tt">Valid thru</span>
                      <select
                        className="monthnm"
                        name="month"
                        required
                        tabIndex={4}
                      >
                        <option disabled value="MM">
                          MM
                        </option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        className="yearnm"
                        name="year"
                        required
                        tabIndex={5}
                      >
                        <option disabled value="YY">
                          YY
                        </option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                      </select>
                    </div>
                    <div className="form-group enter-cvv">
                      <div className="verfy-tt">
                        ?
                        <div className="togle-box">
                          <img src="images/cvv-card.png" alt="cvv-card" />
                          <h4 className="cvv-title">What is CVV?</h4>
                          <span className="small-tt">
                            The CVV number is the last three digits on the back
                            of your card
                          </span>
                          <button className="close-btn">Close</button>
                        </div>
                      </div>
                      <input
                        type="text"
                        id="from"
                        className="form-control"
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        htmlFor="from"
                      >
                        CVV
                      </label>
                    </div>
                  </div>
                  <button className="continue-btn">PAY R400</button>
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
                    id="1"
                    checked={this.state.banktype === 1 ? true : false}
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
                    id="2"
                    checked={this.state.banktype === 2 ? true : false}
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
                    id="3"
                    checked={this.state.banktype === 3 ? true : false}
                    onChange={this.changeBankType}
                    name="bank"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="rdio-box1">
                  <span className="tt-radio">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYtOGg0MHY0MEgtNnoiLz48cGF0aCBmaWxsPSIjQkM0MTcwIiBkPSJNMjggMjRoLTguN0wxNCAxNWg4LjdtLTQuNC03LjZMOC43IDI0SDBMMTQgMCIvPjwvZz48L3N2Zz4="
                      className="_2PKwvL"
                    />
                    Axis Bank
                  </span>
                  <input
                    type="radio"
                    id="4"
                    checked={this.state.banktype === 4 ? true : false}
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
                    id="5"
                    checked={this.state.banktype === 5 ? true : false}
                    onChange={this.changeBankType}
                    name="bank"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>

              <div className="select-bank">
                <span className="b-tt">Other Banks</span>
                <select className="_1CV081" onChange={this.selectBank}>
                  <option value="SELECT_BANK">---Select Bank---</option>
                  {constant.placeorderPage.bankarray.map(
                    (data: any, index: number) => (
                      <option key={index} value={data.value}>
                        {data.title}
                      </option>
                    )
                  )}
                </select>
              </div>

              <button className="continue-btn">PAY R400</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  cardItemsBlock() {
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
                <div className="flex-box" key={index}>
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
                      onChange={(e: any) => this.onChangeEvent(e, index)}
                    />
                    <span
                      className="plus"
                      onClick={() => this.incrementQty(cartdata)}
                    >
                      +
                    </span>
                  </div>
                  <span className="price">R{cartdata.sellingPrice}</span>
                </div>
              ))
            : ""}
        </div>
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
              R{" "}
              {this.state.cartarray
                ? this.state.cartarray.reduce(
                    (sum: number, i: any) => (sum += i.sellingPrice),
                    0
                  )
                : 0}
            </div>
          </div>
          <div className="invoice-box">
            <div className="tilte">Item total</div>
            <div className="price free">Free</div>
          </div>
          <div className="invoice-box total-pay ">
            <div className="tilte">To pay</div>
            <div className="price">
              R{" "}
              {this.state.cartarray
                ? this.state.cartarray.reduce(
                    (sum: number, i: any) => (sum += i.sellingPrice),
                    0
                  )
                : 0}
            </div>
          </div>
        </div>
      </div>
    );
  }

  async changeLogin(text: any, btext: any) {
    if (await alertMessage(text, btext)) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      localStorage.removeItem("cartcount");
      localStorage.removeItem("adminToken");
      this.props.history.push("/signin");
    }
  }

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
                                "You should be login into another account",
                                "Yes, confirm it"
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

                    {this.state.checkedvalue === true ? (
                      <div className="pro-box1 paymt-opton">
                        <div className="dis-box">
                          <div className="dis-left">
                            <div className="tt-1">
                              <span className="numbr">3</span>
                              <h2 className="tt-l">Payment Options</h2>
                            </div>
                            <div className="nm-info  hidediv-1">
                              {/** UPI PAYMENT SECTION */}
                              {this.UPIBlock()}

                              {/* <!-- wallet --> */}
                              {this.walletBlock()}

                              {/* <!-- Credit / Debit / ATM Card --> */}
                              {this.cardBlock()}

                              {/* <!-- Net Banking --> */}
                              {this.netBankingBlock()}
                            </div>
                          </div>
                          <div className="dis-right">
                            <button className="change1">CHANGE</button>
                          </div>
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

const mapStateToProps = (state: any) => ({
  addressDetails: state.placeOrder.addressdata,
  getCartDetail: state.product.getcartdetails,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAddressList: (data: any) =>
    dispatch(placeOrderService.getAddressList(data)),
  addAddress: (data: any) => dispatch(placeOrderService.addAddress(data)),
  getcartData: (data: any) => dispatch(productService.getcartData(data)),
  updateToCart: (data: any, id: any) =>
    dispatch(productService.updateToCart(data, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
