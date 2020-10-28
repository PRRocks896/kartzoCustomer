import React from "react";
import { Link } from "react-router-dom";
import EventEmitter from "../../event";
import {
  getAddressListRequest,
  placeorderStateRequest,
  profileStateRequest,
} from "../../modelController";
import { profile } from "../../pages/components/helper/images";
import { placeOrderService } from "../../redux/actions";
import constant from "../constant/constant";
import { getAppName, alertMessage } from "../utils";
import "./profile.css";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

class Profile extends React.Component<{
  show: boolean;
  history: any;
  getAddressList: any;
  updateAddress: any;
  deleteAddress: any;
}> {
  /** Profile Page State */
  profileState: profileStateRequest = constant.profilePage.state;
  placeOrderState: placeorderStateRequest = constant.placeorderPage.state;
  state = {
    mobile: this.profileState.mobile,
    addressarray: this.profileState.addressarray,
    show: this.profileState.show,
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
    lat: this.placeOrderState.lat,
    long: this.placeOrderState.long,
    mobilephone: this.profileState.mobilephone,
    mobilephoneerror: this.profileState.mobilephoneerror,
    landmarkerror: this.placeOrderState.landmarkerror,
    landmark: this.placeOrderState.landmark,
    addressid: this.profileState.addressid,
    addresstype: this.profileState.addresstype
  };

  constructor(props: any) {
    super(props);
    this.logout = this.logout.bind(this);
    this.modelOpen = this.modelOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.editAddress = this.editAddress.bind(this);
    this.deleteAddressData = this.deleteAddressData.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
  }

  /** Page Render Call */
  componentDidMount() {
    document.title = constant.profile + getAppName();
    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);
    this.setState({
      mobile: user.phone,
      mobilephone: user.phone,
    });
    EventEmitter.dispatch("isShow", false);
    EventEmitter.dispatch("isShowFooter", false);
    this.getAddressDetails();
  }

  /**
   * 
   * @param searchText : search purpose
   * @param page : page number
   * @param size : per page
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
    this.props.getAddressList(obj);
  }

  /**
   * 
   * @param nextProps : updated props
   */
  componentWillReceiveProps(nextProps: any) {
    console.log("props", nextProps);
    if (nextProps.addressDetails) {
      this.setState({
        show:this.state.show = false
      })
      this.getAddressDetailsData(nextProps.addressDetails);
    }
  }

  /**
   *  @param data : address success response
   */
  getAddressDetailsData(data: any) {
    this.setState({
      addressarray: this.state.addressarray = data.data,
    });
  }

  /** logout from website */
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartcount");
    localStorage.removeItem("adminToken");
    EventEmitter.dispatch('count', 0);
    this.props.history.push("/");
  }

  /**
   * 
   * @param data : open model and get address form data
   */
  modelOpen(data: any) {
    this.setState({ show: !this.state.show });
    this.setState({
      show: !this.state.show,
      addressid: data.addressID,
      name: data.name,
      mobile: data.mobile,
      pincode: data.pincode,
      landmark: data.landmark,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      addresstype: data.addressType === "Home" ? "1" : "2",
    });
  }

  /** Close model */
  handleClose() {
    this.setState({ show: !this.state.show });
  }

  /** Get Current Location */
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
   * @param latitude : get current location latitiude
   * @param longitude : get current location longitude
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
            console.log("address", address);
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

  /** Check Form Data Valid || InValid */
  validate() {
    let nameerror = "";
    let mobilephoneerror = "";
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
    if (!this.state.mobilephone) {
      mobilephoneerror = "please enter mobile number";
    } else if (!mobileRegex.test(this.state.mobilephone)) {
      mobilephoneerror = "please enter valid mobile number";
    }

    if (
      nameerror ||
      mobilephoneerror ||
      addresserror ||
      cityerror ||
      stateerror ||
      countryerror ||
      pincodeerror ||
      landmarkerror
    ) {
      this.setState({
        nameerror,
        mobilephoneerror,
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

  /** Edit address */
  editAddress() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        nameerror: "",
        mobilephoneerror: "",
        addresserror: "",
        cityerror: "",
        stateerror: "",
        countryerror: "",
        pincodeerror: "",
        landmarkerror: "",
      });
      const users: any = localStorage.getItem("user");
      let user = JSON.parse(users);
      const obj = {
        addressID: this.state.addressid,
        userID: user.userID,
        name: this.state.name,
        mobile: this.state.mobilephone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pincode: parseInt(this.state.pincode),
        landmark: this.state.landmark,
        addressType: this.state.addresstype === "1" ? "1" : "2",
      };
      this.props.updateAddress(obj);

      setTimeout(() => {
        this.getAddressDetails();
      }, 200);
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
      const obj = {
        moduleName: "Address",
        id: deleteArray,
      };
      this.props.deleteAddress(obj);

      setTimeout(() => {
        this.getAddressDetails();
      }, 200);
    }
  }

  /**
   * 
   * @param event : onChange store value and update the state
   */
  addressChange(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  /**
   * 
   * @param e : change address type (work to home) || (home to work)
   */
  changeAddress(e: any) {
    this.setState({
      addresstype: this.state.addresstype = e.target.id,
    });
  }

  /** Render DOM */
  render() {
    return (
      <>
        <section className="profile-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="dix-flex">
                  <div className="profile-name">
                    <img src={profile.profilepic} alt="" />
                    <div className="pro-tt1">
                      <div className="name">+91-{this.state.mobile}</div>
                      {/* <span className="mobl-no">{this.state.mobile}</span> */}
                      {/* <span className="mobl-no"> | </span>
                      <span className="mobl-no">jay@wd.com</span> */}
                    </div>
                  </div>
                  <div className="logout-btn">
                    <button onClick={this.logout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="flex-tabs">
                  <ul
                    className="nav nav-pills flex-column"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Orders List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Addresses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Manage Payments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="kartzocash-tab"
                        data-toggle="tab"
                        href="#kartzocash"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Kartzo Cash
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="support-tab"
                        data-toggle="tab"
                        href="#support"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Support
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade "
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="order-list">
                        <div className="col-md-12">
                          <h3 className="dlt-tt">Past Order</h3>
                          <div className="order-list1">
                            <div className="dlt-1">
                              <div className="img-box">
                                <img src={profile.food} alt="" />
                              </div>
                              <div className="order-dtl1">
                                <h4 className="sub-tt">Sargam Food</h4>
                                <div className="address-nm">
                                  Race Couse Road
                                </div>
                                <div className="shop-id">
                                  ORDER # 85474154056 | Sun, Oct 11, 2020, 12:19
                                  PM
                                </div>
                                <button className="view-dtl">
                                  View Details
                                </button>
                              </div>
                            </div>

                            <div className="order-food">
                              <div className="food-nm">
                                Paneer Tikka Masala x1
                              </div>
                              <div className="btn-box">
                                <button className="order-btn">REORDER</button>
                                <button className="help-btn">HELP</button>
                              </div>
                            </div>
                          </div>
                          <div className="order-list1">
                            <div className="dlt-1">
                              <div className="img-box">
                                <img src={profile.food} alt="" />
                              </div>
                              <div className="order-dtl1">
                                <h4 className="sub-tt">Sargam Food</h4>
                                <div className="address-nm">
                                  Race Couse Road
                                </div>
                                <div className="shop-id">
                                  ORDER # 85474154056 | Sun, Oct 11, 2020, 12:19
                                  PM
                                </div>
                                <button className="view-dtl">
                                  View Details
                                </button>
                              </div>
                            </div>

                            <div className="order-food">
                              <div className="food-nm">
                                Paneer Tikka Masala x1
                              </div>
                              <div className="btn-box">
                                <button className="order-btn">REORDER</button>
                                <button className="help-btn">HELP</button>
                              </div>
                            </div>
                          </div>
                          <div className="order-list1">
                            <div className="dlt-1">
                              <div className="img-box">
                                <img src={profile.food} alt="" />
                              </div>
                              <div className="order-dtl1">
                                <h4 className="sub-tt">Sargam Food</h4>
                                <div className="address-nm">
                                  Race Couse Road
                                </div>
                                <div className="shop-id">
                                  ORDER # 85474154056 | Sun, Oct 11, 2020, 12:19
                                  PM
                                </div>
                                <button className="view-dtl">
                                  View Details
                                </button>
                              </div>
                            </div>

                            <div className="order-food">
                              <div className="food-nm">
                                Paneer Tikka Masala x1
                              </div>
                              <div className="btn-box">
                                <button className="order-btn">REORDER</button>
                                <button className="help-btn">HELP</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="add-addresses">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Manage Addresses</h3>
                          </div>
                          {this.state.addressarray
                            ? this.state.addressarray.length > 0 &&
                              this.state.addressarray.map(
                                (address: any, index: number) => (
                                  <div className="col-md-6" key={index}>
                                    <div className="addresses">
                                      <img src={profile.bag} alt="" />
                                      <div className="addresses-list">
                                        <h4 className="sub-tt">
                                          {address.addressType}
                                        </h4>
                                        <div className="address-nm">
                                          {address.address}
                                        </div>
                                        <div className="edit-delt-btn">
                                          <button
                                            className="edit-btn"
                                            onClick={() =>
                                              this.modelOpen(address)
                                            }
                                          >
                                            EDIT
                                          </button>
                                          <button
                                            className="edit-btn"
                                            onClick={() =>
                                              this.deleteAddressData(
                                                address.addressID,
                                                "You should be Remove address?",
                                                "Yes, Remove it"
                                              )
                                            }
                                          >
                                            DELETE
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )
                            : ""}
                          <Modal
                            className="modal-dialog-centered"
                            show={this.state.show}
                            onHide={this.handleClose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Edit Address</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ margin: "auto" }}>
                              <div className="p-box1">
                                <div className="edit-dtle">
                                  <form className="form-1">
                                    <button
                                       type="button"
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
                                            value={
                                              this.state.name
                                                ? this.state.name
                                                : ""
                                            }
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
                                            name="mobilephone"
                                            maxLength={10}
                                            value={
                                              this.state.mobilephone
                                                ? this.state.mobilephone
                                                : ""
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
                                            {this.state.mobilephoneerror}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="number"
                                            id="from3"
                                            name="pincode"
                                            value={
                                              this.state.pincode
                                                ? this.state.pincode
                                                : ""
                                            }
                                            className="form-control"
                                            onChange={this.addressChange}
                                            maxLength={6}
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
                                            value={
                                              this.state.landmark
                                                ? this.state.landmark
                                                : ""
                                            }
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
                                            value={
                                              this.state.address
                                                ? this.state.address
                                                : ""
                                            }
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
                                            value={
                                              this.state.city
                                                ? this.state.city
                                                : ""
                                            }
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
                                            value={
                                              this.state.state
                                                ? this.state.state
                                                : ""
                                            }
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
                                            value={
                                              this.state.country
                                                ? this.state.country
                                                : ""
                                            }
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
                                          <span className="text-add">
                                            Address Type
                                          </span>
                                          <div className="radio-dis">
                                            <div className="adrss-1">
                                              <label className="rdio-box1">
                                                <span className="b-tt">
                                                  Home{" "}
                                                </span>
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
                                                />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                            <div className="adrss-1">
                                              <label className="rdio-box1">
                                                <span className="b-tt">
                                                  Work{" "}
                                                </span>
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
                                                />
                                                <span className="checkmark"></span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <div className="deliver">
                                  <button
                                    type="button"
                                    className="save-delivry"
                                    onClick={this.editAddress}
                                  >
                                    Save and Deliver Here
                                  </button>

                                  <button
                                    type="button"
                                    className="btb-text"
                                    onClick={this.handleClose}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="manage-payment">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Wallets</h3>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.paytm} alt="" />
                                <div className="pay-tt">Paytm</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.simple} alt="" />
                                <div className="pay-tt">Simpl</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wallet-1">
                              <div className="img-flex">
                                <img src={profile.lazypay} alt="" />
                                <div className="pay-tt">LazyPay</div>
                              </div>
                              <button className="edit-btn">LINK</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="kartzocash"
                      role="tabpanel"
                      aria-labelledby="kartzocash-tab"
                    >
                      <div className="kartzo-cash">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="flex-box-trms">
                              <h3 className="dlt-tt">Kartzo Cash</h3>
                              <button className="view-dtl">
                                Terms & Conditions
                              </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="kartzo-cash1">
                              <div className="kartzo-cash-tt">
                                Your Kartzo Cash Balance
                              </div>
                              <div className="total-cash">R 200</div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="kartzo-cash2">
                              <img src={profile.eligible} alt="" />
                              <div className="eligible-box">
                                <div className="kartzo-eligible-tt">
                                  Sorry, You are not eligible{" "}
                                </div>
                                <div className="kartzo-eligible-small-tt">
                                  But don't worry, you will be eligible once you
                                  start using the Dunzo platform.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="how-it-work">
                              <h3 className="dlt-tt">How it works</h3>
                              <div className="box-how-work">
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.friends} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Share the referral link with your friends
                                  </span>
                                </div>
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.friends} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Your friend clicks on the link or signs up
                                    through the code
                                  </span>
                                </div>
                                <div className="icon-text1">
                                  <div className="bg-graund">
                                    <img src={profile.wallet} alt="" />
                                  </div>
                                  <span className="small-tt">
                                    Your friend gets ₹50 Dunzo Cash on sign up.
                                    You get ₹50 when they complete an order of
                                    ₹100 or more within 7 days. You can earn
                                    upto ₹500 Dunzo Cash.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="support"
                      role="tabpanel"
                      aria-labelledby="support-tab"
                    >
                      <div className="kartzo-support">
                        <div className="row">
                          <div className="col-md-12">
                            <h3 className="dlt-tt">Support</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div id="accordion">
                              <div className="card">
                                <div className="card-header" id="heading-2">
                                  <h5 className="mb-0">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="#collapse-1"
                                      aria-expanded="false"
                                      aria-controls="collapse-2"
                                    >
                                      I have a payment related query
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id="collapse-1"
                                  className="collapse"
                                  data-parent="#accordion"
                                  aria-labelledby="heading-2"
                                >
                                  <div className="card-body">
                                    Please let us know how we may help
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-header" id="heading-3">
                                  <h5 className="mb-0">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="#collapse-2"
                                      aria-expanded="false"
                                      aria-controls="collapse-3"
                                    >
                                      I have a promotion or Dunzo cash related
                                      query
                                    </a>
                                  </h5>
                                </div>
                                <div
                                  id="collapse-2"
                                  className="collapse"
                                  data-parent="#accordion"
                                  aria-labelledby="heading-3"
                                >
                                  <div className="card-body">
                                    Please let us know how we may help.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
});

const mapDispatchToProps = (dispatch: any) => ({
  getAddressList: (data: any) =>
    dispatch(placeOrderService.getAddressList(data)),
  updateAddress: (data: any) => dispatch(placeOrderService.updateAddress(data)),
  deleteAddress: (data: any) => dispatch(placeOrderService.deleteAddress(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
